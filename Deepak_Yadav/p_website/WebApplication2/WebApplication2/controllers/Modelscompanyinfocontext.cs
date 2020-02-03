using System;
using System.Collections.Generic;
using WebApplication2.Models;

namespace WebApplication2.controllers
{
    public class Modelscompanyinfocontext
    {
        public IEnumerable<object> Tcompanydata { get; internal set; }

        public static implicit operator Modelscompanyinfocontext(companyinfoContext v)
        {
            throw new NotImplementedException();
        }
    }
}