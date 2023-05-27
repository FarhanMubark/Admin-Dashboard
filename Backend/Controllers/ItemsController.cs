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
    public class ItemsController : ControllerBase
    {
        private readonly IConfiguration _config;

        public ItemsController(IConfiguration config)
        {
            _config = config;
        }

        [HttpGet]
        public async Task<ActionResult<List<Items>>> GetAllItems()
        {
            using var connection = new SqlConnection(_config.GetConnectionString("DefaultConnection"));
            var items = await SelectAllItems(connection);
            return Ok(items);
        }

        [HttpGet("{itemId}")]

        public async Task<ActionResult<Customers>> GetItem(int itemId)
        {
            using var connection = new SqlConnection(_config.GetConnectionString("DefaultConnection"));
            var item = await connection.QueryFirstAsync<Users>("Select * From Items where id = @Id",
                new { Id = itemId });
            return Ok(item);
        }
        
        [HttpPost]
        public async Task<ActionResult<List<Items>>> CreateItem(Items item)
        {
            using var connection = new SqlConnection(_config.GetConnectionString("DefaultConnection"));
            await connection.ExecuteAsync("insert into Items(firstname, lastname, email, gender) VALUES(@FirstName, @LastName, @Email, @Gender)", item);
            return Ok(await SelectAllItems(connection));
        }

     

        [HttpDelete("{itemId}")]
        public async Task<ActionResult<Customers>> DeleteItem(int userId)
        {
            using var connection = new SqlConnection(_config.GetConnectionString("DefaultConnection"));
            await connection.ExecuteAsync("Delete from Items where id=@Id", new { Id = userId });
            return Ok(await SelectAllItems(connection));
        }
        private static async Task<IEnumerable<Items>> SelectAllItems(SqlConnection connection)
        {
            var items = await connection.QueryAsync<Items>("Select * From items");
            return items;
        }
    }
}
