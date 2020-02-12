using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UserAuthorization.CustomModels
{
    public class CustomTokenAndUsername
    {
        public string JwT { get; set; }
        public string Username { get; set; }
    }
}
