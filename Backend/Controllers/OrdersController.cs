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
    public class OrdersController : ControllerBase
    {
        private readonly IConfiguration _config;

        public OrdersController(IConfiguration config)
        {
            _config = config;
        }

        [HttpGet]
        public async Task<ActionResult<List<Orders>>> GetAllOrders()
        {
            using var connection = new SqlConnection(_config.GetConnectionString("DefaultConnection"));
            var orders = await SelectAllItems(connection);
            return Ok(orders);
        }

        [HttpGet("{orderId}")]

        public async Task<ActionResult<Orders>> GetOrders(int orderId)
        {
            using var connection = new SqlConnection(_config.GetConnectionString("DefaultConnection"));
            var order = await connection.QueryFirstAsync<Orders>("Select * From Orders where id = @Id",
                new { Id = orderId });
            return Ok(order);
        }
        
        [HttpPost]
        public async Task<ActionResult<List<Items>>> CreateOrder(Orders order)
        {
            using var connection = new SqlConnection(_config.GetConnectionString("DefaultConnection"));
            await connection.ExecuteAsync("select * from Orders", order);
            return Ok(await SelectAllItems(connection));
        }

        [HttpDelete("{orderId}")]
        public async Task<ActionResult<Customers>> DeleteOrders(int orderId)
        {
            using var connection = new SqlConnection(_config.GetConnectionString("DefaultConnection"));
            await connection.ExecuteAsync("Delete from Orders where id=@Id", new { Id = orderId });
            return Ok(await SelectAllItems(connection));
        }
        private static async Task<IEnumerable<Orders>> SelectAllItems(SqlConnection connection)
        {
            var orders = await connection.QueryAsync<Orders>("Select * From Orders");
            return orders;
        }
    }
}
