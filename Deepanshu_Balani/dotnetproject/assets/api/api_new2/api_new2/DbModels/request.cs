using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api_new2.DbModels
{
    public class request

    {
        public int EmpId { get; set; }
        public string Name { get; set; }
        public string Gender { get; set; }
        public int Age { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }
    }
}
