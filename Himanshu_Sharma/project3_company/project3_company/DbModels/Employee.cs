using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace project3_company.DbModels
{
    public partial class Employee
    {
        public Employee()
        {
            EmployeeProject = new HashSet<EmployeeProject>();
        }

        public int EmployeeId { get; set; }
        
        public string Email { get; set; }
        
        public string Password { get; set; }
        
        public string FirstName { get; set; }

        public string LastName { get; set; }
        public string Mobile { get; set; }
        public string Role { get; set; }
        public int? Manager { get; set; }

        public ICollection<EmployeeProject> EmployeeProject { get; set; }
    }
}
