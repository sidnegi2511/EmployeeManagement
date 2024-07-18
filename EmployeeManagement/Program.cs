using EmployeeManagement.Data;
using EmployeeManagement.Repository;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.InMemory;
namespace EmployeeManagement
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            builder.Services.AddDbContext<AppDbContext>(
                options => options.UseInMemoryDatabase("EmployeeDb")
            );

            builder.Services.AddCors(options =>
            {
                options.AddPolicy("MyCors", builder =>
                {
                    builder.WithOrigins("http://localhost:4200")
                        .AllowAnyHeader()
                        .AllowAnyMethod();
                });
            });

            //Adding a service (EmployeeRepository) to our DI in the lifetime httpRequest
            builder.Services.AddScoped<IEmployeeRepository, EmployeeRepository > ();

            //to do unit testing, using TestCases and not the DB
            //builder.Services.AddScoped<IEmployeeRepository, MockEmployeeRepository > ();

            builder.Services.AddControllers();

            var app = builder.Build();

            app.MapGet("/", () => "Hello World!");

            app.Run();
        }
    }
}
