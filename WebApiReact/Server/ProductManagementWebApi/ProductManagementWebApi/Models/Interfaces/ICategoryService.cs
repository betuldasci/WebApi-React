namespace ProductManagementWebApi.Models.Interfaces
{
    public interface ICategoryService
    {
        public Task<List<Category>> GetAllCategoriesAsync();
    }
}
