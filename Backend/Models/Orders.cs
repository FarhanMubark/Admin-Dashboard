namespace Dash2_Backend.Models;

public class Orders
{
    public int Id { get; set; }
    public string Title { get; set; } = String.Empty;
    public string Brand { get; set; } = String.Empty;
    public string Category { get; set; } = String.Empty;
    public string Price { get; set; } = String.Empty;
    public string Department { get; set; } =String.Empty;
}