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
    public class AdminController : ControllerBase
    {
        DbOperations.IDbOperations _idbo;
        public AdminController(DbOperations.IDbOperations idbo)
        {
            _idbo = idbo;
        }

        [Route("Users")]
        [HttpPost]
        public IActionResult getAll([FromBody] CustomModels.CustomEmployee customEmployee)
        {
            List<CustomModels.CustomEmployee> emp = _idbo.getAllEmp(customEmployee.JwT);
            if(emp != null)
            {
                return Ok(emp);
            }
            else
            {
                return Unauthorized();
            }
        }

        [HttpDelete]
        public IActionResult deleteOne([FromBody] CustomModels.CustomTokenAndUsername customTokenAndUsername)
        {
            int temp = _idbo.deleteEmp(customTokenAndUsername.Username, customTokenAndUsername.JwT);
            if (temp == 1)
            {
                return Ok("Deleted");
            }
            else if(temp == 0)
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