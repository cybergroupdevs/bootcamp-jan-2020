using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EmployeeManagement.Custom_Models;
using EmployeeManagement.DbModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace EmployeeManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SignupController : ControllerBase
    {
        EmployeeDBContext _employeeDBContext;
        public SignupController(EmployeeDBContext employeeDBContext)
        {
            _employeeDBContext = employeeDBContext;
        }

        [HttpPost]
        public IActionResult CreateEmployee([FromBody]CustomEmployee customEmployee)
        {
            TEmployee employee = new TEmployee()
            {
                FName =customEmployee.FName,
                Lname = customEmployee.Lname,
                Email = customEmployee.Email,
                Passwrd = customEmployee.Passwrd

            };
            _employeeDBContext.TEmployee.Add(employee);
            _employeeDBContext.SaveChanges();
            return Ok("Employee Added");
        }
    }
}

