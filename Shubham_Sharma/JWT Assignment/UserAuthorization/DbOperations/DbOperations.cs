using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using UserAuthorization.DbModels;
using UserAuthorization.CustomModels;
using UserAuthorization.Services;

namespace UserAuthorization.DbOperations
{
    public interface IDbOperations
    {
        Boolean insertData(CustomEmployee employeeDetails);
        CustomEmployee checkUser(CustomEmployee customEmployee);
        List<CustomEmployee> getAllEmployees(string token);
        int deleteEmployeeInformation(string usn, string token);
    }

    public class DbOperations : IDbOperations
    {
        private readonly EmployeesContext _employeesContext;
        private readonly IBusinessLogic _businessLogic;
        public DbOperations(EmployeesContext employeesContext, IBusinessLogic businessLogic)
        {
            _employeesContext = employeesContext;
            _businessLogic = businessLogic;
        }

        //insert data, will be hit by Signup Page
        public Boolean insertData(CustomEmployee employeeDetails)
        {
            try
            {
                EmployeeDetails employee = new EmployeeDetails()
                {
                    EmpName = employeeDetails.EmpName,
                    Username = employeeDetails.Username,
                    EmpPhone = employeeDetails.EmpPhone,
                    EmpAddress = employeeDetails.EmpAddress,
                    EmpRole = employeeDetails.EmpRole,
                    EmpPassword = employeeDetails.EmpPassword,
                    EmpProjectId = employeeDetails.EmpProjectId,
                    AdminFlag = employeeDetails.AdminFlag,
                    EmpFlag = employeeDetails.EmpFlag
                };

                _employeesContext.EmployeeDetails.Add(employee);
                _employeesContext.SaveChanges();
                return true;
            }
            catch (SqlException sqle)
            {
                return false;
            }
        }
        
        //Checks user credentials, returns the object containing details of employee if it exists
        public CustomEmployee checkUser(CustomEmployee customEmployee)
        {
            CustomEmployee employee = null;
            EmployeeDetails tempEmployee = _employeesContext.EmployeeDetails.Where(x => x.Username == customEmployee.Username && x.EmpPassword == customEmployee.EmpPassword).FirstOrDefault();
            if(tempEmployee != null)
            {
                employee = new CustomEmployee
                {
                    //EmpName, EMpPhone etc... is stored in my Database, and if I change it now then, I have to 
                    //perform the scaffolding again. I'll take care of these conventions from now.
                    //SORRY !
                    EmpName = tempEmployee.EmpName,
                    Username = tempEmployee.Username,
                    EmpPhone = tempEmployee.EmpPhone,
                    EmpRole = tempEmployee.EmpRole,
                    EmpProjectId = tempEmployee.EmpProjectId,
                    EmpFlag = tempEmployee.EmpFlag,
                    AdminFlag = tempEmployee.AdminFlag
                };
                return employee;
            }
            return employee;
        }

        //Returns all users
        public List<CustomEmployee> getAllEmployees(string token)
        {
            List<CustomEmployee> employees = null;
            if (_businessLogic.checkUserAuthentication(token))
            {
                employees = _employeesContext.EmployeeDetails
                .Select(employee => new CustomEmployee
                {
                    EmpName = employee.EmpName,
                    Username = employee.Username,
                    EmpPhone = employee.EmpPhone,
                    EmpRole = employee.EmpRole,
                    EmpAddress = employee.EmpAddress,
                    EmpProjectId = employee.EmpProjectId
                }).ToList();
                return employees;
            }
            else
            {
                return employees;
            }
        }

        //Delete employee and the token for signature matching
        public int deleteEmployeeInformation(string username, string token)
        {
            int employeeSuccessfullyDeleted = 1;
            int employeeNotExists = 0;
            int invalidToken = 2;
            if (_businessLogic.checkUserAuthentication(token))
            {
                EmployeeDetails employee = _employeesContext.EmployeeDetails.Where(tempEmployee => tempEmployee.Username == username).FirstOrDefault();
                if (employee != null)
                {
                    _employeesContext.EmployeeDetails.Remove(employee);
                    _employeesContext.SaveChanges();
                    return employeeSuccessfullyDeleted;
                }
                else
                {
                    return employeeNotExists;
                }
            }
            else
            {
                return invalidToken;
            }               
        }
    }
}
