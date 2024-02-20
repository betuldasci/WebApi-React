namespace ProductManagementWebApi.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public double Price { get; set; }
        public int SalesCount { get; set; }
        public string? Gallery { get; set; }
        public string? Image { get; set; }

        public int CategoryId { get; set; }
        public Category Category { get; set; }
        
    }
}
