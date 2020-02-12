using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace company.CustomModels
{
    public partial class SignupModel
    {
        public string Name { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }
        public string ProjectID { get; set; }

    }
}