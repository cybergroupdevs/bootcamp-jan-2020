using System;
using System.Collections.Generic;

namespace project3_company.DbModels
{
    public partial class EmployeeProject
    {
        public int EpId { get; set; }
        public int EmployeeId { get; set; }
        public int ProjectId { get; set; }

        public Employee Employee { get; set; }
        public Project Project { get; set; }
    }
}
