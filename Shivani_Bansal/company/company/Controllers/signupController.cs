using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using company.CustomModels;
using company.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace company.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SignupController : ControllerBase
    {

        //IRegister _reg;
        //public SignupController(IRegister reg)
        //{
        //    _reg = reg;
        //}

        [HttpPost]
        public IActionResult Post([FromBody] SignupModel enteredDetails)
        {
            Signup signup = new Signup(enteredDetails);
            string returnedFromSignupHandler = signup.signupHandler();
            return Ok(returnedFromSignupHandler);
        }
    }
}