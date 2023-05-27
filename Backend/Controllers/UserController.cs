using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Dash2_Backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Dash2_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IConfiguration _config;

        public UserController(IConfiguration config)
        {
            _config = config;
        }

        [HttpGet]
        public async Task<ActionResult<List<Users>>> GetAllUsers()
        {
            using var connection = new SqlConnection(_config.GetConnectionString("DefaultConnection"));
            var users = await SelectAllUsers(connection);
            return Ok(users);
        }

        [HttpGet("{userId}")]

        public async Task<ActionResult<Users>> GetUser(int userId)
        {
            using var connection = new SqlConnection(_config.GetConnectionString("DefaultConnection"));
            var user = await connection.QueryFirstAsync<Users>("Select * From Users where id = @Id",
                new { Id = userId });
            return Ok(user);
        }
        
        [HttpPost]
        public async Task<ActionResult<List<Users>>> CreateUser(Users user)
        {
            using var connection = new SqlConnection(_config.GetConnectionString("DefaultConnection"));
            await connection.ExecuteAsync("insert into Users(name, email, pwd) VALUES(@Name, @Email, @Pwd)", user);
            return Ok(await SelectAllUsers(connection));
        }

        [HttpPut]
        public async Task<ActionResult<List<Users>>> UpdateUser(Users user)
        {
            
            using var connection = new SqlConnection(_config.GetConnectionString("DefaultConnection"));
            await connection.ExecuteAsync("update Users set name=@Name, email=@Email, pwd=@Pwd where id=@Id",user);
            return Ok(await SelectAllUsers(connection));
        }

        [HttpDelete("{userId}")]
        public async Task<ActionResult<Users>> Deleteuser(int userId)
        {
            using var connection = new SqlConnection(_config.GetConnectionString("DefaultConnection"));
            await connection.ExecuteAsync("Delete from Users where id=@Id", new { Id = userId });
            return Ok(await SelectAllUsers(connection));
        }
        private static async Task<IEnumerable<Users>> SelectAllUsers(SqlConnection connection)
        {
            var users = await connection.QueryAsync<Users>("Select * From Users");
            return users;
        }
    }
}
