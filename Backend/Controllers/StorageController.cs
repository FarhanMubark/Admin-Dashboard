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
    public class StorageController : ControllerBase
    {
        private readonly IConfiguration _config;

        public StorageController(IConfiguration config)
        {
            _config = config;
        }

        [HttpGet]
        public async Task<ActionResult<List<Storage>>> GetAllStorage()
        {
            using var connection = new SqlConnection(_config.GetConnectionString("DefaultConnection"));
            var storage = await SelectAllIStorage(connection);
            return Ok(storage);
        }

        [HttpGet("{storageId}")]

        public async Task<ActionResult<Orders>> GetStorage(int storageId)
        {
            using var connection = new SqlConnection(_config.GetConnectionString("DefaultConnection"));
            var storage = await connection.QueryFirstAsync<Storage>("Select * From Storage where id = @Id",
                new { Id = storageId });
            return Ok(storage);
        }
        
        [HttpPost]
        public async Task<ActionResult<List<Storage>>> CreateStorage(Storage storage)
        {
            using var connection = new SqlConnection(_config.GetConnectionString("DefaultConnection"));
            await connection.ExecuteAsync("select * from Storage", storage);
            return Ok(await SelectAllIStorage(connection));
        }

        [HttpDelete("{storageId}")]
        public async Task<ActionResult<Storage>> DeleteStorage(int storageId)
        {
            using var connection = new SqlConnection(_config.GetConnectionString("DefaultConnection"));
            await connection.ExecuteAsync("Delete from Storage where id=@Id", new { Id = storageId });
            return Ok(await SelectAllIStorage(connection));
        }
        private static async Task<IEnumerable<Storage>> SelectAllIStorage(SqlConnection connection)
        {
            var storage = await connection.QueryAsync<Storage>("Select * From Storage");
            return storage;
        }
    }
}
