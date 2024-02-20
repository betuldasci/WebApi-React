using ProductManagementWebApi.Models.Interfaces;

namespace ProductManagementWebApi.Models.Services
{
    public class CategoryService : ICategoryService
    {
        DataContext _db;
        public CategoryService(DataContext db)
        {
            _db = db;
        }
        public  Task<List<Category>> GetAllCategoriesAsync()
        {
           return Task.FromResult(_db.Category.ToList()) ;  
        }
    }
}
