using company.Custom_Models;
using company.CustomModels;
using company.DbModels;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace company.Repositories
{
    public class Signup
    {
        private webApiContext _webapiContext;

        private SignupModel _details; 
        public Signup(SignupModel details)
        {
            _details = details;

            _webapiContext = new webApiContext() ;
        }
        public string signupHandler()
        {
            UsersInfo user = new UsersInfo()
            {
                Name = _details.Name,
                Email = _details.Email,
                Username = _details.Username,
                Password = _details.Password,
                Role = _details.Role,
                ProjectId = _details.ProjectID
            };
            _webapiContext.UsersInfo.Add(user);
            _webapiContext.SaveChanges();

            return ("registered");
        }

        public List<UsersInfo> dashboardHandler()
        {
            List<UsersInfo> output = _webapiContext.UsersInfo.ToList();
            return (output);
        }

        public string deleteHandler(int empID)
        {
            UsersInfo user = _webapiContext.UsersInfo.Find(empID);
            _webapiContext.UsersInfo.Remove(user);
            _webapiContext.SaveChanges();
            return ("deleted");

        }

        public string updateHandler(int empID)
        {
            UsersInfo user = _webapiContext.UsersInfo.Find(empID);

            user.Name = SignupModel.Name;
            user.Username = SignupModel.Username;
            user.Email = SignupModel.Email;
            _webapiContext.SaveChanges();
            return ("user updated");
        }
    }
}
