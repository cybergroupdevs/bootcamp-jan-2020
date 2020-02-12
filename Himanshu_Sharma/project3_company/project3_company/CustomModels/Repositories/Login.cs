using project3_company.CustomModels.Models;
using project3_company.DbModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace project3_company.CustomModels.Repositories
{
    public class Login
    {
        ILogin login;
        companyContext _companyContext;

        public Login(ILogin details)
        {
            login = new ILogin()
            {
                Email = details.Email,
                Password = details.Password
            };

            _companyContext = new companyContext();
        }

        public Employee loginHandler()
        {
            var employee = _companyContext.Employee.Where(emp => emp.Email == login.Email && emp.Password == login.Password).FirstOrDefault();

            return employee;
        }
    }
}
