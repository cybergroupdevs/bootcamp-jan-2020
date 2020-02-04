using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using project3_company.CustomModels.Models;

//Custom Imports
using project3_company.CustomModels.Repositories;
using project3_company.DbModels;

namespace project3_company.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        [HttpPost]
        public IActionResult Post([FromBody] IHome enteredDetails)
        {
            Home home = new Home(enteredDetails);
            List<Employee> employees = home.returnEmployees();
            return Ok(employees);
        }
    }
}