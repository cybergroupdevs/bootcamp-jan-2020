using System;
using System.Collections.Generic;

namespace UserAuthorization.DbModels
{
    public partial class EmployeeDetails
    {
        public string EmpName { get; set; }
        public string Username { get; set; }
        public string EmpPhone { get; set; }
        public string EmpAddress { get; set; }
        public string EmpRole { get; set; }
        public string EmpPassword { get; set; }
        public string EmpProjectId { get; set; }
        public int AdminFlag { get; set; }
        public int EmpFlag { get; set; }
    }
}
