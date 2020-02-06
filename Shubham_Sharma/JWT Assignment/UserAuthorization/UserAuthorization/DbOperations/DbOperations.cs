using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace UserAuthorization.DbOperations
{
    public interface IDbOperations
    {
        Boolean insertData(CustomModels.CustomEmployee employeeDetails);
        CustomModels.CustomEmployee checkUser(CustomModels.CustomEmployee customEmployee);
        List<CustomModels.CustomEmployee> getAllEmp(string token);
        Boolean deleteEmp(string usn, string token);
    }

    public class DbOperations : IDbOperations
    {
        private readonly DbModels.EmployeesContext _employeesContext;
        private readonly Services.IBusinessLogic _businessLogic;
        public DbOperations(DbModels.EmployeesContext employeesContext, Services.IBusinessLogic businessLogic)
        {
            _employeesContext = employeesContext;
            _businessLogic = businessLogic;
        }

        public Boolean insertData(CustomModels.CustomEmployee employeeDetails)
        {
            try
            {
                DbModels.EmployeeDetails emp = new DbModels.EmployeeDetails()
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

                _employeesContext.EmployeeDetails.Add(emp);
                _employeesContext.SaveChanges();
                return true;
            }
            catch (SqlException sqle)
            {
                return false;
            }
        }
        
        //Checks user credentials, returns the object containing details of employee if it exists
        public CustomModels.CustomEmployee checkUser(CustomModels.CustomEmployee customEmployee)
        {
            CustomModels.CustomEmployee ce = null;
            DbModels.EmployeeDetails employee = _employeesContext.EmployeeDetails.Where(x => x.Username == customEmployee.Username && x.EmpPassword == customEmployee.EmpPassword).FirstOrDefault();
            if(employee != null)
            {
                ce = new CustomModels.CustomEmployee
                {
                    EmpName = employee.EmpName,
                    Username = employee.Username,
                    EmpPhone = employee.EmpPhone,
                    EmpRole = employee.EmpRole,
                    EmpProjectId = employee.EmpProjectId,
                    EmpFlag = employee.EmpFlag,
                    AdminFlag = employee.AdminFlag
                };
                return ce;
            }
            return ce;
        }

        //Returns all users
        public List<CustomModels.CustomEmployee> getAllEmp(string token)
        {
            List<CustomModels.CustomEmployee> emps = null;
            if (_businessLogic.checkUserAuthentication(token))
            {
                emps = _employeesContext.EmployeeDetails
                .Select(x => new CustomModels.CustomEmployee
                {
                    EmpName = x.EmpName,
                    Username = x.Username,
                    EmpPhone = x.EmpPhone,
                    EmpRole = x.EmpRole,
                    EmpAddress = x.EmpAddress,
                    EmpProjectId = x.EmpProjectId
                }).ToList();
                return emps;
            }
            else
            {
                return emps;
            }
        }

        public int deleteEmp(string usn, string token)
        {
            if (_businessLogic.checkUserAuthentication(token))
            {
                DbModels.EmployeeDetails emp = _employeesContext.EmployeeDetails.Where(x => x.Username == usn).FirstOrDefault();
                if (emp != null)
                {
                    _employeesContext.EmployeeDetails.Remove(emp);
                    _employeesContext.SaveChanges();
                    return 1;
                }
                else
                {
                    return 0;
                }
            }
            else
            {
                return 2;
            }               
        }
    }
}
