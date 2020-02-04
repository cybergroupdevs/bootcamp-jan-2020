using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api_new2.DbModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api_new2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class company6Controller : ControllerBase
    {
        apiproject2Context _apiproject2context;

        // DbModels.STUDENTINFOContext STUDENTINFOContext
        public company6Controller(apiproject2Context apiproject)
        {
            _apiproject2context = apiproject;
        }





        // GET: api/company6/5
        [HttpGet]
        public IActionResult GetEmployee([FromBody]request request)
        { Company Emp = new Company()
        {

            Email = request.Email,
            Password = request.Password

        };

            List<Company> employees = _apiproject2context.Company.ToList();
            return Ok(employees);
            /*    foreach(Company Emplo in employees)
                {
                    if (Emplo.Email == Emp.Email && Emplo.Password == Emp.Password)


                }  */

            return null;
        }


        // POST: api/company6
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

        // PUT: api/company6/5
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
        public IActionResult DeleteEmployee([FromBody]request request)
        {

            Company ID = _apiproject2context.Company.FirstOrDefault();


            _apiproject2context.Company.Remove(ID);
            _apiproject2context.SaveChanges();

            return Ok("RECORD DELETED");
        }
    }
}
