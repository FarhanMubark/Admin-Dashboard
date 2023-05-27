
using System.Data.SqlClient;
using Dapper;
using Dash2_Backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace Dash2_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomersController : ControllerBase
    {
           private readonly IConfiguration _config;

        public CustomersController(IConfiguration config)
        {
            _config = config;
        }

        [HttpGet]
        public async Task<ActionResult<List<Customers>>> GetAllCustomers()
        {
            using var connection = new SqlConnection(_config.GetConnectionString("DefaultConnection"));
            var customers = await SelectAllCustomers(connection);
            return Ok(customers);
        }

        [HttpGet("{customerId}")]
        
        public async Task<ActionResult<Customers>> GetCustomer(int customerId)
        {
            using var connection = new SqlConnection(_config.GetConnectionString("DefaultConnection"));
            var customer = await connection.QueryFirstAsync<Users>("Select * From Users where id = @Id",
                new { Id = customerId });
            return Ok(customer);
        }
        
        [HttpPost]
        public async Task<ActionResult<List<Customers>>> CreateCustomer(Customers customer)
        {
            using var connection = new SqlConnection(_config.GetConnectionString("DefaultConnection"));
            await connection.ExecuteAsync("insert into Customers(firsname,lastname, email, gender) VALUES(@Firstname,@LastName ,@Email, @Gender)", customer);
            return Ok(await SelectAllCustomers(connection));
        }

        [HttpPut]
        public async Task<ActionResult<List<Customers>>> UpdateCustomer(Customers customer)
        {
            
            using var connection = new SqlConnection(_config.GetConnectionString("DefaultConnection"));
            await connection.ExecuteAsync("update Customers set firstname=@FirstName, email=@Email, lastname=@LastName where id=@Id",customer);
            return Ok(await SelectAllCustomers(connection));
        }

        [HttpDelete("{customerId}")]
        public async Task<ActionResult<Customers>> DeleteCustomer(int userId)
        {
            using var connection = new SqlConnection(_config.GetConnectionString("DefaultConnection"));
            await connection.ExecuteAsync("Delete from Customers where id=@Id", new { Id = userId });
            return Ok(await SelectAllCustomers(connection));
        }
        private static async Task<IEnumerable<Customers>> SelectAllCustomers(SqlConnection connection)
        {
            var customers = await connection.QueryAsync<Customers>("Select * From Customers");
            return customers;
        }
    }
    }

