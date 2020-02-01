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

        [StringLength(60, MinimumLength = 5)]
        [Required]
        public string Email { get; set; }

        [StringLength(60, MinimumLength = 6)]
        [Required]
        public string Password { get; set; }

        [StringLength(60, MinimumLength = 2)]
        [Required]
        public string FirstName { get; set; }

        public string LastName { get; set; }
        public string Mobile { get; set; }
        public string Role { get; set; }
        public int? Manager { get; set; }

        public ICollection<EmployeeProject> EmployeeProject { get; set; }
    }
}
