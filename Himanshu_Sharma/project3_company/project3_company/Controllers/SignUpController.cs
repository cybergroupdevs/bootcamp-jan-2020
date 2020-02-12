using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

//Custom Imports
using project3_company.CustomModels;
using project3_company.CustomModels.Repositories;
using project3_company.DbModels;

namespace project3_company.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SignUpController : ControllerBase
    {
        [HttpPost]
        public IActionResult Post([FromBody] ISignUp enteredDetails)
        {
            SignUp signUp = new SignUp(enteredDetails);
            return Ok(signUp.signUpHandler());
        }   
    }
}