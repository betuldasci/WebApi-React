namespace ProductManagementWebApi.Models
{
    public class Cart
    {
        public int Id { get; set; }
        public DateTime CreatedDate { get; set; }
        public  double TotalPrice { get; set; }
        public int UserId { get; set; }
        public User? User { get; set; }
    }
}
