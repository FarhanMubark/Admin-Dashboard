using System.ComponentModel.DataAnnotations;

namespace Dash2_Backend.Models;

public class Users
{
  
    public int Id { get; set; }
    public string Name { get; set; } = String.Empty;
    public string Email { get; set; } = String.Empty;
    public int Pwd { get; set; }
}

