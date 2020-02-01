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
                return "Employee already exists with this email address";
            }
            else
            {
                Validation validation = new Validation();
                employee = this.employee;
                employee.EmployeeId = _companyContext.Employee.Count()+1;

                var responseAfterValidation = validation.signUpValidation(employee);
                
                if (responseAfterValidation.status)
                {
                    _companyContext.Employee.Add(employee);
                    _companyContext.SaveChanges();
                }

                return responseAfterValidation.resultString;
            }
        }
        
    }
}
