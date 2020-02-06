using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EmployeeManagement.Custom_Models;
using EmployeeManagement.DbModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {

        EmployeeDBContext _employeeDBContext;
        public AdminController(EmployeeDBContext employeeDBContext)
        {
            _employeeDBContext = employeeDBContext;
        }

        [HttpGet]
        public ActionResult GetEmployee()
        {
            // List<TStudent> studentName = _cSharpAdvContext.TStudent.ToList();
            List<TEmployee> employee = _employeeDBContext.TEmployee.ToList();
            return Ok(employee);
        }
        
        [HttpDelete]
        public IActionResult DeleteStudent(CustomEmployee customEmployee)
        {
            TEmployee employee = _employeeDBContext.TEmployee.FirstOrDefault();
            _employeeDBContext.TEmployee.Remove(employee);
            _employeeDBContext.SaveChanges();
            return Ok("Deleted");
        }
    }
}