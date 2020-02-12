using System;
using System.Collections.Generic;

namespace project3_company.DbModels
{
    public partial class Project
    {
        public Project()
        {
            EmployeeProject = new HashSet<EmployeeProject>();
        }

        public int ProjectId { get; set; }
        public string ProjectName { get; set; }

        public ICollection<EmployeeProject> EmployeeProject { get; set; }
    }
}
