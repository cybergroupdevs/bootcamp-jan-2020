using System;
using System.Collections.Generic;

namespace UsersApplication.Models
{
    public partial class Users
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
