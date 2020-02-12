using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using UserAuthorization.CustomModels;
using UserAuthorization.DbOperations;

namespace UserAuthorization.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        IDbOperations _iDbOperations;
        public AdminController(IDbOperations iDbOperations)
        {
            _iDbOperations = iDbOperations;
        }

        [Route("Employees")]
        [HttpPost]
        public IActionResult getAll([FromBody] CustomEmployee customEmployee)
        {
            List<CustomEmployee> employees = _iDbOperations.getAllEmployees(customEmployee.JwT);
            if(employees != null)
            {
                return Ok(employees);
            }
            else
            {
                return Unauthorized();
            }
        }

        [HttpDelete]
        public IActionResult deleteOne([FromBody] CustomTokenAndUsername customTokenAndUsername)
        {
            int exists = _iDbOperations.deleteEmployeeInformation(customTokenAndUsername.Username, customTokenAndUsername.JwT);
            if (exists == 1)
            {
                return Ok("Deleted");
            }
            else if(exists == 0)
            {
                return Ok("No such username exists");
            }
            else
            {
                return Unauthorized();
            }
        }

    }
}