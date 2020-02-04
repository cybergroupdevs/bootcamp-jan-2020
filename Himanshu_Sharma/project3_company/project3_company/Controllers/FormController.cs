using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using project3_company.CustomModels.Repositories;

namespace project3_company.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FormController : ControllerBase
    {
        //[HttpPost]
        //public IActionResult Post([FromBody] IForm enteredDetails)
        //{
        //    Form form = new Form(enteredDetails);
        //    return Ok(signUp.signUpHandler());
        //}

    }
}