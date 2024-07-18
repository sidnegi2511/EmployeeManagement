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
        public ActionResult<EmployeeModel> AddEmployee(EmployeeModel model)
        {
            return Ok();
        }

        [Route("get-all-employees")]
        [HttpGet]
        public List<EmployeeModel> GetAllEmployee()
        {
            var res = Queries.GetResult<List<EmployeeModel>, GetAllAsync>(
                new GetAllAsync);
            return res;

        }
    }
}
