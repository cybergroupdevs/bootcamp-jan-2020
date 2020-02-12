using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

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
            List<Models.Tcompanydata> employees = _context.Tcompanydata.ToList();
            return Ok(employees);
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public ActionResult getspecificStudent(int id)
        {
            Models.Tcompanydata employees = _context.Tcompanydata.Where(x => x.CusId == id).FirstOrDefault();
            return Ok(employees);
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

        [HttpDelete]
        public ActionResult deleteStudent(int id)
        {

            Models.Tcompanydata employees = _context.Tcompanydata.Where(x => x.CusId == id).FirstOrDefault();
            _context.Tcompanydata.Remove(employees);
            _context.SaveChanges();
            return Ok("Deleted");

        }
    }
}