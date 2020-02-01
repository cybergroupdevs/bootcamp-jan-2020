using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;

//Custom Imports
using project3_company.CustomModels;
using project3_company.DbModels;

namespace project3_company.CustomModels.Repositories
{
    public class SignUp
    {
        companyContext _companyContext;

        Employee employee;

        //public SignUp(companyContext companyContext)
        //{
        //    this._companyContext = companyContext;
        //}

        public SignUp(ISignUp details)
        {
            employee = new Employee()
            {
                Email = details.Email,
                Password = details.Password,
                FirstName = details.FirstName,
                LastName = details.LastName,
                Mobile = details.Mobile,
                Role = "Employee"
            };

            _companyContext = new companyContext();
        }

        public string signUpHandler()
        {
            var employee = _companyContext.Employee.Where(emp => emp.Email == this.employee.Email).FirstOrDefault();

            if (employee != null)
            {
                return "Employee already exists";
            }
            else
            {
                Validation validation = new Validation();
                var responseAfterValidation = validation.signUpValidation(this.employee);
                
                if (responseAfterValidation.status)
                {
                    _companyContext.Employee.Add(this.employee);
                    _companyContext.SaveChanges();
                }

                return responseAfterValidation.resultString;
            }
        }
        
    }
}
