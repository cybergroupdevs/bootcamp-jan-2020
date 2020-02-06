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
    public class EmployeeController : ControllerBase
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

        public EmployeeController(DbModels.projectContext projectContext)
        {
            _projectContext = projectContext;
        }

        [HttpPost]
        public IActionResult CreateEntry([FromBody] CustomModels.DetailsClass detailsClass)
        {
            DbModels.Temployee temployee = new DbModels.Temployee();
      
            temployee.EmpName = detailsClass.EmpName;
            temployee.EmpEmail = detailsClass.EmpEmail;
            temployee.EmpPassword = detailsClass.EmpPassword;
            temployee.EmpGender= detailsClass.EmpGender;
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
        

    }
}