using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebappAPItype.CustomModels
{
    public class PanelRequest
    {
        public int Sno { get; set; }
        public string Projectid { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }
        public long? ContactNo { get; set; }
        public string ProjectName { get; set; }

    }
}
