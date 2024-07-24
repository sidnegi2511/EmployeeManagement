using EmployeeManagement.Data;
using EmployeeManagement.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EmployeeManagement.Repository
{
    public class EmployeeRepository : IEmployeeRepository
    {
        // readonly allows to create or assign new values multiple times only inside the constructor and the declartions
        private readonly AppDbContext _context;

        //constructor
        public EmployeeRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<EmployeeModel>> GetAllAsync()
        {
            return await _context.Employees.ToListAsync();
        }

        public async Task<EmployeeModel?> GetEmployeeByIdAsync(int id)
        {
            return await _context.Employees.FindAsync(id);
        }
        public async Task AddEmployeeAsync(EmployeeModel model)
        {
            await _context.Employees.AddAsync(model);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateEmployeeAsync(EmployeeModel model)
        {
            var data = _context.Employees.FirstOrDefault(x => x.ID == model.ID);
            if (data == null)
            {
                throw new KeyNotFoundException($"Employee with Id {model.ID} does not exist in the DB.");
            }
            // Update the properties of the existing entity
            data.FirstName = model.FirstName;
            data.LastName = model.LastName;
            data.Position = model.Position;
            data.Email = model.Email;
            data.Phone = model.Phone;

            _context.Employees.Update(data);
            await _context.SaveChangesAsync();
        }
        public async Task DeleteEmployeeAsync(int id)
        {
            var employeeInDb = await _context.Employees.FindAsync(id);
            if(employeeInDb == null)
            {
                throw new KeyNotFoundException($"Employee with Id {id} doesnot exist in the DB.");
            }
            _context.Employees.Remove(employeeInDb);
            await _context.SaveChangesAsync();
        }

        
        
    }
}
