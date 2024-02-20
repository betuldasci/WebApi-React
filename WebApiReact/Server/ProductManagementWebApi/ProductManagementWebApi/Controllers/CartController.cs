using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProductManagementWebApi.Models;

namespace ProductManagementWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        DataContext _db;
        public CartController(DataContext db)
        {
            _db = db;
        }
        [HttpPost("FillCart")]
        public async Task<ActionResult<bool>> FillCartAsync([FromBody] CartDetail request)
        {
            var result = false;
            if (request != null)
            {
                var cart = new Cart()
                {
   
                    CreatedDate = DateTime.Now,
                    UserId = 1,
                    TotalPrice = request.TotalPrice,
                };
                _db.Cart.Add(cart);
                _db.SaveChanges();
                result = true;
            }
            return result;
        }
    }
}
