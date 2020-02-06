using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UserAuthorization.CustomModels
{
    public class CustomEmployee
    {
        public string JwT { get; set; }
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
