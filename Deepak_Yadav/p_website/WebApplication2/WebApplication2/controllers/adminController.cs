using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApplication2.controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class adminController : ControllerBase
    {
        Models.companyinfoContext _context;
        public adminController(Models.companyinfoContext context)
        {
            _context = context;
        }
        [HttpGet]
        public ActionResult getStudent([FromBody]Custom_Models.tcompanycustom data)
        {
            //DbModels.StudentInfo student = new DbModels.StudentInfo();
            List<Models.Tcompanydata> employees = _context.Tcompanydata.ToList();
            return Ok(employees);
        }
        [HttpPatch]
        public ActionResult pupdateemployee(int id, [FromBody]Custom_Models.tcompanycustom data)
        {
            Models.Tcompanydata employees = _context.Tcompanydata.Where(x => x.CusId == data.CusId).FirstOrDefault();
            employees.Name = data.Name;
            _context.Tcompanydata.Update(employees);
            _context.SaveChanges();
            return Ok("PUpdated");
        }
        // DELETE api/<controller>/5
        [HttpDelete]
        public ActionResult pdeleteemployee(int id)
        {
           Models.Tcompanydata employees = _context.Tcompanydata.Where(x => x.CusId == id).FirstOrDefault();
            _context.Tcompanydata.Remove(employees);
            _context.SaveChanges();
            return Ok("Deleted");
        }
    }
}