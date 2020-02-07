using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api_new2.DbModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace apiProject_bootcamp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class bootcamp_companyController : ControllerBase
    {
        apiproject2Context _apiproject2context;

        // DbModels.apiprojectContext apiproject2Context
        public bootcamp_companyController(apiproject2Context apiproject)
        {
            _apiproject2context = apiproject;
        }
     // GET: api/bootcamp_company
        [HttpGet]//fetching data of all the employees 
        public IActionResult GetEmployee()
        {
           List<Company> employees = _apiproject2context.Company.ToList();
            return Ok(employees);
        }


        // POST: api/bootcamp_Company
        [HttpPost]
        public IActionResult createEmployee([FromBody] request request)
        {

            Company employee = new Company()
            {
                Name = request.Name,
                Gender = request.Gender,
                Age = request.Age,
                Email = request.Email,
                Password = request.Password,
                Role = request.Role
            };
            _apiproject2context.Add(employee);
            _apiproject2context.SaveChanges();
            return Ok("record updated");
        }

        // PUT: api/bootcamp_company
        [HttpPut("{id}")]
        public IActionResult updateEmployee([FromBody]request request)
        {

            Company ID = _apiproject2context.Company.FirstOrDefault();
            ID.Name = request.Name;
            ID.Email = request.Email;
            _apiproject2context.Company.Update(ID);
            _apiproject2context.SaveChanges();
            return Ok("record added");

        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public IActionResult DeleteEmployee(request request)
        {
            

            Company ID = _apiproject2context.Company.Where(x => x.Email ==request.Email).FirstOrDefault();
                 

            _apiproject2context.Company.Remove(ID);
            _apiproject2context.SaveChanges();

            return Ok("RECORD DELETED");
        }
    }
}
