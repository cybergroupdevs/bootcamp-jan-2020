using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication2.Custom_Models
{
    public class tcompanycustom
    {
        public int CusId { get; set; }
        public string Name { get; set; }
        public string PhoneNo { get; set; }
        public string Designation { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public object EmpPassword { get; internal set; }
    }
}
