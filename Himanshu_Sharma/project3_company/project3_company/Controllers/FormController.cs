using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using project3_company.CustomModels.Models;
using project3_company.CustomModels.Repositories;

namespace project3_company.Controllers
{
    [ApiController]
    public class FormController : ControllerBase
    {
        [Authorize]
        [HttpPost("api/form/create_employee")]
        public void Create([FromBody] IForm enteredDetails)
        {
            if (enteredDetails.Role == "Admin")
            {
                Form form = new Form(enteredDetails);
                form.createEmployee();
            }
        }

        [Authorize]
        [HttpPost("api/form/create_project")]
        public void CreateProject([FromBody] string projectName)
        {
            Form form = new Form();
            form.createProject(projectName);
        }

        [Authorize]
        [HttpGet("api/employee/{id}")]
        public IForm Read(int id)
        {
            Form form = new Form();
            IForm emp = form.returnEmployee(id);
            return emp;
        }

        [Authorize]
        [HttpPut("api/employee/update/{id}")]
        public void Update([FromBody] IForm enteredDetails)
        {
            Form form = new Form(enteredDetails);
            form.updateEmployee();
        }

        [Authorize]
        [HttpDelete("api/delete/{id}")]
        public void Delete(int id)
        {

        }

    }
}