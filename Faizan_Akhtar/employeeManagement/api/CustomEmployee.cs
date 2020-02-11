using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeManagement.Custom_Models
{
    public class CustomEmployee
    {

        public int EmpId { get; set; }
        public string FName { get; set; }
        public string Lname { get; set; }
        public string Email { get; set; }
        public string Passwrd { get; set; }
        public string Designation { get; set; }
        public string Project { get; set; }
        public string Manager { get; set; }
        public int? Salary { get; set; }
    }
}
