using System;
using System.Collections.Generic;

namespace WebApplicationPanel.DbModels
{
    public partial class EmpInformation
    {
        public int Sno { get; set; }
        public string Projectid { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }
        public long? ContactNo { get; set; }
        public string ProjectName { get; set; }
    }
}
