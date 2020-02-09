using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApplication2.controllers
{
    [Route("api/[controller]")]
    public class companyinfocontroller : Controller
    {
        Models.companyinfoContext _context;
        public companyinfocontroller(Models.companyinfoContext context)
        {
            _context = context;
        }

        // GET: api/<controller>
        [HttpGet]
        public ActionResult getStudent([FromBody]Custom_Models.tcompanycustom data)
        {
            //DbModels.StudentInfo student = new DbModels.StudentInfo();
            List<Models.Tcompanydata> employees = _context.Tcompanydata.ToList();
            return Ok(employees);
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        [HttpPost]
        public ActionResult Post([FromBody]Custom_Models.tcompanycustom data)
        {
            Models.Tcompanydata emp = new Models.Tcompanydata()
            {
           
            Name = data.Name,
            PhoneNo = data.PhoneNo,
            Designation = data.Designation,
            Email = data.Email,
            Password=data.Password,
        };
            _context.Tcompanydata.Add(emp);
            _context.SaveChanges();
            return Ok("employees added");
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        [HttpDelete]
        public ActionResult deleteStudent([FromBody]Custom_Models.tcompanycustom data)
        {

            Models.Tcompanydata employees = _context.Tcompanydata.Where(x => x.CusId == data.CusId).FirstOrDefault();
            _context.Tcompanydata.Remove(employees);
            _context.SaveChanges();
            return Ok("Deleted");

        }
    }
}