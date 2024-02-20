using ProductManagementWebApi.Models.Interfaces;

namespace ProductManagementWebApi.Models.Services
{
    public class ProductService : IProductService
    {
        DataContext _db;
        public ProductService(DataContext db)
        {
            _db = db;
        }
        public Task<List<Product>> GetAllProductsAsync()
        {
            return Task.FromResult(_db.Product.ToList());
        }
    }
}
