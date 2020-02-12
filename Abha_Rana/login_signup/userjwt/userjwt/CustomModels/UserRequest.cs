using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace userjwt.CustomModels
{
    public class UserRequest
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
        public string Project { get; set; }
        public string ProjectManager { get; set; }
        public long? Phone { get; set; }
        public string Role { get; set; }
        public string Address { get; set; }
    }
}
