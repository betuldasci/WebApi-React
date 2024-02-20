using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace ProductManagementWebApi.Models
{
    public class DataContext:DbContext
    {
        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    optionsBuilder.UseSqlServer(@"data source=DESKTOP-ONLB0EL;initial catalog=DenemeDb;integrated security=true");
        //    //optionsBuilder.UseSqlServer(@"server=DESKTOP-JU3J93J;database=PMWADb;TrustServerCertificate=true;MultipleActiveResultSets=true");
        //}
        public DataContext(DbContextOptions<DataContext> options)
       : base(options)
        {
        }

        public DbSet<Category> Category { get; set; }
        public DbSet<Product> Product { get; set; }
        public DbSet<User> User { get; set; }
        public DbSet<Cart> Cart { get; set; }
    }
}
