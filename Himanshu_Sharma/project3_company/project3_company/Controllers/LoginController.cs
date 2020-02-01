using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using project3_company.CustomModels.Models;
using project3_company.CustomModels.Repositories;

namespace project3_company.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        [HttpPost]
        public IActionResult Post([FromBody] ILogin enteredDetails)
        {
            Login login = new Login(enteredDetails);
            return Ok(login.loginHandler());
        }
    }
}