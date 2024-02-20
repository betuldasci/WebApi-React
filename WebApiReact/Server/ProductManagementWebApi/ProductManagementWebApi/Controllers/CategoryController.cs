using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProductManagementWebApi.Models;
using ProductManagementWebApi.Models.Interfaces;

namespace ProductManagementWebApi.Controllers
{
    [Route("api/[controller]")]
    //api/category
    [ApiController]
    public class CategoryController : ControllerBase
    {
        ICategoryService _categoryService;
        public CategoryController(ICategoryService categoryService)
        {
            _categoryService = categoryService;
        }

        public  Task<List<Category>> GetCategories()
        {
           return _categoryService.GetAllCategoriesAsync();
        }

    }
}
