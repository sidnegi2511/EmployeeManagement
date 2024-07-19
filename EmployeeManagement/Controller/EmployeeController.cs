using EmployeeManagement.Models;
using EmployeeManagement.Repository;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeManagement.Controller
{
    [Route("api")]
    [ApiController]
    public class EmployeeController: ControllerBase
    {
        private readonly IEmployeeRepository _employeeRepository;
        private readonly IQueryExecutor Queries;

        public EmployeeController
        (
             IEmployeeRepository employeeRepository,
            IQueryExecutor queryExecutor
        )
        {
            _employeeRepository = employeeRepository;
            Queries = queryExecutor;

        }

        [Route("add-employee")]
        [HttpPost]
        public async Task<ActionResult<EmployeeModel>> AddEmployee(EmployeeModel model)
        {
            await _employeeRepository.AddEmployeeAsync(model);
            return Created(); //status 201
        }

        [Route("get-all-employees")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EmployeeModel>>> GetAllEmployee()
        {
            var res = await _employeeRepository.GetAllAsync();
            return Ok(res);
        }
    }
}
