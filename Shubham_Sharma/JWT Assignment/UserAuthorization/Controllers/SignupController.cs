using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using UserAuthorization.DbOperations;
using UserAuthorization.CustomModels;

namespace UserAuthorization.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SignupController : ControllerBase
    {
        IDbOperations _dataBaseOperations;
        public SignupController(IDbOperations dataBaseOperations)
        {
            _dataBaseOperations = dataBaseOperations;
        }

        [HttpPost]
        public IActionResult Signup([FromBody] CustomEmployee employeeDetails)
        {
            if (_dataBaseOperations.insertData(employeeDetails))
            {
                return Ok("Inserted");
            }
            else
            {
                return Ok("Some Error Occured");
            }
        }
    }
}