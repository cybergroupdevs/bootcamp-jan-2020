using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UsersApplication.Models;

namespace UsersApplication.CustomModels
{
    public partial class UserInfo
    {
    
        public int RId { get; set; }
        public string Name { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public int? ProjectId { get; set; }
        public string Role { get; set; }
    }
}
