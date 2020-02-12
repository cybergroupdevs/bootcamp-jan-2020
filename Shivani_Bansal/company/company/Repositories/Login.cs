using company.Custom_Models;
using company.DbModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace company.Repositories
{
    public class Login 
    {
        LoginModel _details;
        webApiContext _webapiContext;
        public Login( LoginModel enteredDetails) {
            _details = new LoginModel()
            {
                Email = enteredDetails.Email,
                Password = enteredDetails.Password
            };

            _webapiContext = new webApiContext() ;
        }
        public UsersInfo loginHandler()
        {
            UsersInfo usersInfo = _webapiContext.UsersInfo.Where(emp => emp.Email == _details.Email && emp.Password == _details.Password).FirstOrDefault();
            return usersInfo;
        }
    }
}
