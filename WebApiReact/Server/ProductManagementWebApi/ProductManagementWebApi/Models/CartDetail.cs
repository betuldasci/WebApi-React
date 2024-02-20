namespace ProductManagementWebApi.Models
{
    public class CartDetail
    {
        public DateTime CreatedDate { get; set; }
        public double TotalPrice { get; set; }
        public int UserId { get; set; }
    }
}
