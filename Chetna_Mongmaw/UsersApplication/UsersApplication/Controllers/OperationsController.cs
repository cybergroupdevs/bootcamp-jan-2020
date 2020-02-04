using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using UsersApplication.Models;
using UsersApplication.CustomModels;
using UsersApplication.Repositories;

namespace UsersApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OperationsController : ControllerBase
    {
        Repositories.IRegister _reg;
        public OperationsController(Repositories.IRegister reg)
        {
            _reg = reg;
        }

        [HttpPost]
        public IActionResult Post([FromBody] UserInfo enteredDetails)
        {
            //Register register = new Register(enteredDetails);
            //return Ok(userInfo);
            var output = _reg.signupHandler(enteredDetails);
           
            return Ok(output);
        }
        [HttpDelete("{id}")]
        public IActionResult Delete([FromBody] deleteInfo toDelete)
        {
            var output = _reg.deleteHandler(toDelete);
            return Ok(output);
        }


        //[HttpPost]
        //public IActionResult Post([FromBody] ISignUp enteredDetails)
        //{
        //SignUp signUp = new SignUp(enteredDetails);
        //return Ok(signUp.signUpHandler());
        //}
        //}
    }
}