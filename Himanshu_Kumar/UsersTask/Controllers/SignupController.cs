using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace UsersTask.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SignupController : ControllerBase
    {
        DbOps.IDbOps _dbOps;
        public SignupController(DbOps.IDbOps dbOps)
        {
            _dbOps = dbOps;
        }


        [HttpPost]
        public IActionResult Signup([FromBody] CustomModels.customUsers userDetails)
        {
            if (_dbOps.insertData(userDetails))
            {
                return Ok("Inserted");
            }
            else
            {
                return Ok("Some Error Occured");
            }
        }

        [HttpPut]
        public IActionResult tester([FromBody] CustomModels.customUsers user)
        {
            return Ok("Inserted");
        }
    }
}