using project3_company.CustomModels.Models;
using project3_company.DbModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace project3_company.CustomModels.Repositories
{
    public class Home
    {
        IHome _details;
        companyContext _companyContext;


        public Home(IHome details)
        {
            _details = new IHome()
            {
                Role = details.Role,
                Email = details.Email,
                Name = details.Name
            };

            _companyContext = new companyContext();
        }

        public void Create()
        {
            if (_details.Role == "Admin")
            {

            }

        }

        public void Read()
        {

        }

        public void Update()
        {

        }

        public void Delete()
        {

        }

        public List<Employee> returnEmployees()
        {
            List<Employee> employees = new List<Employee>();
            Employee currentEmployee = _companyContext.Employee.FirstOrDefault(cur => cur.Email == _details.Email);

            if (_details.Role == "Admin")
            {
                employees = _companyContext.Employee.ToList();
                return employees;
            }
            else if(_details.Role == "Manager")
            {
                employees = _companyContext.Employee.Where(cur => cur.Manager == currentEmployee.EmployeeId).ToList();
                employees.Add(currentEmployee);

                return employees;
            }

            employees.Add(currentEmployee);
            return employees;
        }
    }
}
