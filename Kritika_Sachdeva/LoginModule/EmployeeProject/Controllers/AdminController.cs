using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {

        DbModels.projectContext _projectContext;

        private string EmpName;
        private string EmpEmail;
        private string EmpPassword;
        private string EmpGender;
        private long EmpPhone;
        private decimal EmpExp;
        private DateTime? EmpJoining;
        private string EmpRole;
        private string EmpPm;
        private string EmpProject;

        public AdminController(DbModels.projectContext projectContext)
        {
            _projectContext = projectContext;
        }

        
        [HttpGet("{mail}")]
        public IActionResult EmpData(String mail)
        {
            DbModels.Temployee temployee = _projectContext.Temployee.Where(s => s.EmpEmail == mail).FirstOrDefault();
           return Ok(temployee);
        }
        


        [HttpPost]
        public IActionResult CreateEntry([FromBody] CustomModels.DetailsClass detailsClass)
        {
            DbModels.Temployee temployee = new DbModels.Temployee();

            temployee.EmpName = detailsClass.EmpName;
            temployee.EmpEmail = detailsClass.EmpEmail;
            temployee.EmpPassword = detailsClass.EmpPassword;
            temployee.EmpGender = detailsClass.EmpGender;
            temployee.EmpPhone = detailsClass.EmpPhone;
            temployee.EmpExp = detailsClass.EmpExp;
            temployee.EmpJoining = detailsClass.EmpJoining;
            temployee.EmpRole = detailsClass.EmpRole;
            temployee.EmpPm = detailsClass.EmpPm;
            temployee.EmpProject = detailsClass.EmpProject;

            _projectContext.Temployee.Add(temployee);
            _projectContext.SaveChanges();

            return Ok("Employee Added!");
        }

        [HttpDelete("{id}")]
        public void DeleteEntry(int id)
        {
            DbModels.Temployee emp = _projectContext.Temployee.Where(s => s.EmpId == id).FirstOrDefault();
            _projectContext.Temployee.Remove(emp);
            _projectContext.SaveChanges();
        }



        [HttpPut("{id}")]
        public IActionResult UpdateEntry(int id, [FromBody] CustomModels.DetailsClass detailsClass)
        {
            DbModels.Temployee temployee = _projectContext.Temployee.Where(s => s.EmpId == id).FirstOrDefault();
            temployee.EmpName = detailsClass.EmpName;
            temployee.EmpEmail = detailsClass.EmpEmail;
            temployee.EmpPassword = detailsClass.EmpPassword;
            temployee.EmpGender = detailsClass.EmpGender;
            temployee.EmpPhone = detailsClass.EmpPhone;
            temployee.EmpExp = detailsClass.EmpExp;
            temployee.EmpJoining = detailsClass.EmpJoining;
            temployee.EmpRole = detailsClass.EmpRole;
            temployee.EmpPm = detailsClass.EmpPm;
            temployee.EmpProject = detailsClass.EmpProject;

            _projectContext.Temployee.Update(temployee);
            _projectContext.SaveChanges();

            return Ok("Employee data updated!");
        }

        [HttpPatch("{id}")]
        public IActionResult PartialUpdateData(int id, [FromBody] CustomModels.DetailsClass detailsClass)
        {
            DbModels.Temployee temployee = _projectContext.Temployee.Where(s => s.EmpId == id).FirstOrDefault();
            temployee.EmpRole = detailsClass.EmpRole;
            temployee.EmpPm = detailsClass.EmpPm;
            //_demodbContext.Student.Update(stu);
            _projectContext.SaveChanges();

            return Ok("Employee data updated by patch!");
        }

        [Route("getAllUsers")]
        [HttpGet]
        public IActionResult GetAll()
        {
            List<CustomModels.DetailsClass> emps = null;
            
                emps = _projectContext.Temployee
                .Select(x => new CustomModels.DetailsClass
                {
                    EmpName = x.EmpName,
                    EmpEmail = x.EmpEmail,
                    EmpGender=x.EmpGender,
                    EmpPhone = x.EmpPhone,
                    EmpExp=x.EmpExp,
                    EmpJoining=x.EmpJoining,
                    EmpRole = x.EmpRole,
                    EmpPm = x.EmpPm,
                    EmpProject = x.EmpProject
                }).ToList();


            return Ok(emps);
        }
           
        }

    }