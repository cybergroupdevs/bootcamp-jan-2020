using System;
using System.Collections.Generic;

namespace api_new2.DbModels
{
    public partial class Company
    {
        public int EmpId { get; set; }
        public string Name { get; set; }
        public string Gender { get; set; }
        public int Age { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }

        internal static Company FirstOrDefault()
        {
            throw new NotImplementedException();
        }
    }
}
