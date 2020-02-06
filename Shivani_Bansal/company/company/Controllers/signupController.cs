using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using company.Custom_Models;
using company.CustomModels;
using company.DbModels;
using company.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace company.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SignupController : ControllerBase
    {
        [HttpPost]
        public IActionResult Post([FromBody] SignupModel enteredDetails)
        {
            Signup signup = new Signup(enteredDetails);
            string returnedFromSignupHandler = signup.signupHandler();
            return Ok(returnedFromSignupHandler);
        }

        [HttpGet]
        public IActionResult get()
        {
            Signup signup = new Signup(null);
            var output = signup.dashboardHandler();
            return Ok(output);
        }

        [HttpDelete("{id}")]
        public ActionResult<string> Delete(int empID)
        {
            Signup signup = new Signup(null);
            signup.deleteHandler(empID);
            return Ok("deleted");

        }
     }
}