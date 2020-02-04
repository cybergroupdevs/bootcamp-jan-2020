using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace project3_company.CustomModels.Models
{
    public class IForm
    {
        public string Email { get; set; }

        public string Password { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }
        public string Mobile { get; set; }
        public string Role { get; set; }
        public int? Manager { get; set; }
    }
}
