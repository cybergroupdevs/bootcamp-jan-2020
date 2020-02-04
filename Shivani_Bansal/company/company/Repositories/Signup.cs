using company.CustomModels;
using company.DbModels;
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
            this._details = details;

            this._webapiContext = new webApiContext() ;
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

        

        




    }
}
