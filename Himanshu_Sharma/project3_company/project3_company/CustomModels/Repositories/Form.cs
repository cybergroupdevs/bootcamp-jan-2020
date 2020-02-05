using project3_company.CustomModels.Models;
using project3_company.DbModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace project3_company.CustomModels.Repositories
{
    public class Form
    {
        IForm _details;
        companyContext _context;
        public Form(IForm details)
        {
            _details = details;
            _context = new companyContext();
        }

        public Form()
        {
            _context = new companyContext();
        }

        public void createEmployee()
        {
            Employee employee = new Employee() {
                Email = _details.Email,
                FirstName = _details.FirstName,
                LastName = _details.LastName,
                Manager = _details.Manager,
                Mobile = _details.Mobile,
                Password = _details.Password,
                Role = _details.Role,
                EmployeeId = _context.Employee.Count() + 1
            };

            foreach (string projectName in _details.ProjectList)
            {
                EmployeeProject ep = new EmployeeProject()
                {
                    EpId = _context.EmployeeProject.Count() + 1,
                    EmployeeId = employee.EmployeeId,
                    ProjectId = _context.Project.Where(cur => cur.ProjectName == projectName).FirstOrDefault().ProjectId
                };
                _context.EmployeeProject.Add(ep);
            }
        }

        public void createProject(string projectName)
        {
            Project project = new Project()
            {
                ProjectId = _context.Project.Count() + 1,
                ProjectName = projectName
            };
        }

        public IForm returnEmployee(int id)
        {
            Employee emp = _context.Employee.Where(cur => cur.EmployeeId == id).FirstOrDefault();
            List<EmployeeProject> ep = _context.EmployeeProject.Where(cur => cur.EmployeeId == id).ToList();

            List<string> projects = new List<string>();

            foreach (EmployeeProject epCur in ep)
            {
                string projectName = _context.Project.Where(cur => cur.ProjectId == epCur.ProjectId).FirstOrDefault().ProjectName;
                projects.Add(projectName);
            }

            IForm form = new IForm()
            {
                Email = emp.Email,
                Password = emp.Password,
                FirstName = emp.FirstName,
                LastName = emp.LastName,
                Mobile = emp.Mobile,
                Role = emp.Role,
                Manager = emp.Manager,
                ProjectList = projects
            };

            return form;
        }

        public void updateEmployee()
        {
            
        }
    }
}
