using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace UserAuthorization.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SignupController : ControllerBase
    {
        DbOperations.IDbOperations _dbOperations;
        public SignupController(DbOperations.IDbOperations dbOperations)
        {
            _dbOperations = dbOperations;
        }


        [HttpPost]
        public IActionResult Signup([FromBody] CustomModels.CustomEmployee employeeDetails)
        {
            if (_dbOperations.insertData(employeeDetails))
            {
                return Ok("Inserted");
            }
            else
            {
                return Ok("Some Error Occured");
            }
        }

        [HttpPut]
        public IActionResult tester([FromBody] CustomModels.CustomEmployee emplolyee)
        {
            return Ok("Inserted");
        }
    }
}