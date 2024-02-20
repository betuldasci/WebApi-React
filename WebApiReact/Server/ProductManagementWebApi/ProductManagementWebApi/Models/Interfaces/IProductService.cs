namespace ProductManagementWebApi.Models.Interfaces
{
    public interface IProductService
    {
        public Task<List<Product>> GetAllProductsAsync();
    }
}
