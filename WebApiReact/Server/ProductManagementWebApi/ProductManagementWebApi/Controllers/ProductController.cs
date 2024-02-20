using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProductManagementWebApi.Models;
using ProductManagementWebApi.Models.Interfaces;

namespace ProductManagementWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        IProductService _productService; 
        public ProductController(IProductService productService)
        {
            _productService = productService;
        }

        public Task<List<Product>> GetProducts()
        {
            return _productService.GetAllProductsAsync();
        }

    }
}
