using System;
using System.Collections.Generic;

namespace UsersTask.DbModels
{
    public partial class Userdetails
    {
        public int Id { get; set; }
        public string Namee { get; set; }
        public string Gender { get; set; }
        public int? Age { get; set; }
        public string Email { get; set; }
        public string Pass { get; set; }
        public string Jobrole { get; set; }
    }
}
