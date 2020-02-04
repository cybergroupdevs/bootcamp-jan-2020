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

            Models.Tcompanydata employees = _context.Tcompanydata.FirstOrDefault();
            _context.Tcompanydata.Remove(employees);
            _context.SaveChanges();
            return Ok("Deleted");

        }
    }
}
/*using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using APIBasics2.Dbmodels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace APIBasics2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class studentinfoController : ControllerBase
    {
        Dbmodels.DbModelsCsharpbasicsContext _csharpbasicsContext;
        private object Student;

        public studentinfoController(DbModelsCsharpbasicsContext csharpbasicsContext)
        {
            _csharpbasicsContext = csharpbasicsContext;
        }
        [HttpPost]
        public ActionResult CreateStudent([FromBody]CustomModels.StudentRequest studentRequest)
        {
            Dbmodels.StudentInfo student = new Dbmodels.StudentInfo()
            {
                StudentName = studentRequest.StudentName,
                Salary = studentRequest.Salary
            };
            _csharpbasicsContext.StudentInfo.Add(student);
            _csharpbasicsContext.SaveChanges();
            return Ok("students added");

        }
        [HttpGet]
        public ActionResult getStudent([FromBody]CustomModels.StudentRequest studentRequest)
        {
            //DbModels.StudentInfo student = new DbModels.StudentInfo();
            List<Dbmodels.StudentInfo> students = _csharpbasicsContext.StudentInfo.ToList();
            return Ok(students);
        }
        [HttpGet("{id}")]
        public ActionResult getspecificStudent(int id)
        {
            //DbModels.StudentInfo student = new DbModels.StudentInfo();
            Dbmodels.StudentInfo students = _csharpbasicsContext.StudentInfo.Where(x=>x.Id==id).FirstOrDefault();
            return Ok(students);
        }
        [HttpPut("{id}")]
        public ActionResult updateStudent(int id,[FromBody]CustomModels.StudentRequest studentRequest)
        {
         Dbmodels.StudentInfo students = _csharpbasicsContext.StudentInfo.Where(x => x.Id == id).FirstOrDefault();
            students.StudentName = studentRequest.StudentName;
            students.Salary = studentRequest.Salary;
            _csharpbasicsContext.StudentInfo.Update(students);
            _csharpbasicsContext.SaveChanges();
            return Ok("Updated");
        }
        [HttpPatch("{id}")]
        public ActionResult pupdateStudent(int id, [FromBody]CustomModels.StudentRequest studentRequest)
        {
            Dbmodels.StudentInfo students = _csharpbasicsContext.StudentInfo.Where(x => x.Id == id).FirstOrDefault();
            students.Salary = studentRequest.Salary;
            _csharpbasicsContext.StudentInfo.Update(students);
            _csharpbasicsContext.SaveChanges();
            return Ok("PUpdated");
        }
        [HttpDelete]
        public ActionResult deleteStudent([FromBody]CustomModels.StudentRequest studentRequest)
        {

            Dbmodels.StudentInfo students = _csharpbasicsContext.StudentInfo.FirstOrDefault();
            _csharpbasicsContext.StudentInfo.Remove(students);
            _csharpbasicsContext.SaveChanges();
            return Ok("Deleted");

        }
    }
}*/
