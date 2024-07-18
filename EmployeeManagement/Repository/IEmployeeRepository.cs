using EmployeeManagement.Models;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;

namespace EmployeeManagement.Repository
{
    public interface IEmployeeRepository // GENERRIC INTERFACE BY ADDING <T> here and using instead of employee model
    {
        Task<IEnumerable<EmployeeModel>> GetAllAsync();
        Task<EmployeeModel?> GetIdAsync(int id);
        Task AddEmployeeAsync(EmployeeModel model);
        Task UpdateEmployeeAsync(EmployeeModel model);
        Task DeleteEmployeeAsync(int id);
    }

    public interface IQueryExecutor
    {
        TResult GetResult<TResult, TQuery>(TQuery query) where TQuery : Query;

    }
}
