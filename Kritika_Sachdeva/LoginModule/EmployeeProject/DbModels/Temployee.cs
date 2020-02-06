using System;
using System.Collections.Generic;

namespace EmployeeProject.DbModels
{
    public partial class Temployee
    {
        public int EmpId { get; set; }
        public string EmpName { get; set; }
        public string EmpEmail { get; set; }
        public string EmpPassword { get; set; }
        public string EmpGender { get; set; }
        public long EmpPhone { get; set; }
        public decimal EmpExp { get; set; }
        public DateTime? EmpJoining { get; set; }
        public string EmpRole { get; set; }
        public string EmpPm { get; set; }
        public string EmpProject { get; set; }
    }
}
