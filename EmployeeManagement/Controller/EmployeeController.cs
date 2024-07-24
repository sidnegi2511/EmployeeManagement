using EmployeeManagement.Models;
using EmployeeManagement.Repository;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics.Contracts;

namespace EmployeeManagement.Controller
{
    [Route("api")]
    [ApiController]
    public class EmployeeController: ControllerBase
    {
        private readonly IEmployeeRepository _employeeRepository;

        public EmployeeController
        (
             IEmployeeRepository employeeRepository
        )
        {
            _employeeRepository = employeeRepository;

        }

        [Route("add-employee")]
        [HttpPost]
        //creates data and returns the created data for info

        public async Task<ActionResult<EmployeeModel>> AddEmployee(EmployeeModel model)
        {
            await _employeeRepository.AddEmployeeAsync(model);
            return CreatedAtAction(nameof(GetEmployeeById), new { id = model.ID }, model); //status 201
        }

        [Route("update-employee")]
        [HttpPut]
        //updates data and returns the updated data for info

        public async Task<IActionResult> UpdateEmployee(EmployeeModel model)
        {
            try
            {
                await _employeeRepository.UpdateEmployeeAsync(model);
                return NoContent(); // status 204
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(new { Message = ex.Message }); // status 404
            }
            catch (Exception ex)
            {
                // Log the exception (ex) here
                return StatusCode(500, new { Message = "An error occurred while updating the employee." }); // status 500
            }
        }

        [Route("delete-employee")]
        [HttpDelete]

        public async Task<ActionResult> DeleteEmployee(int id)
        {
             await _employeeRepository.DeleteEmployeeAsync(id);
            return NoContent();
        }

        [Route("get-all-employees")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EmployeeModel>>> GetAllEmployee()
        {
            var res = await _employeeRepository.GetAllAsync();
            return Ok(res);
        }

        [Route("get-employee-by-id")]
        [HttpGet]

        public async Task<ActionResult<EmployeeModel>> GetEmployeeById(int id)
        {
            var res = await _employeeRepository.GetEmployeeByIdAsync(id);
            if (res == null)
            {
                return NotFound();
            }
            return Ok(res);
        }
    }
}
