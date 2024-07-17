using EmployeeManagement.Models;
using Microsoft.EntityFrameworkCore;
namespace EmployeeManagement.Data
{
    public class AppDbContext : DbContext
    {
        public DbSet<EmployeeModel> Employees { get; set; }

        //Constructor using base constructor. Options are passed to base contructor from program/startup file
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options) 
        {
            
        }
    }
}
