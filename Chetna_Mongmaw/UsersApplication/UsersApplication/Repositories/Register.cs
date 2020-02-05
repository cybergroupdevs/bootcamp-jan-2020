using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UsersApplication.Models;
using UsersApplication.CustomModels;


namespace UsersApplication.Repositories
{
    public interface IRegister
    {
        string signupHandler(UserInfo enteredDetails);
        string deleteHandler(deleteInfo toDelete);
    }
    public class Register : IRegister
    {

        private WebAppContext _webAppcontext;
        public Register(WebAppContext webAppContext)
        {
            _webAppcontext = webAppContext;
        }

        //public Register(UserInfo enteredDetails)
        //{
        //    this.enteredDetails = enteredDetails;
           
        //}

        public string signupHandler(UserInfo enteredDetails)
        {
            Users user = new Users()
            {
            Username = enteredDetails.Username,
            Name = enteredDetails.Name,
            Email = enteredDetails.Email,
            Password = enteredDetails.Password,
            ProjectId = enteredDetails.ProjectId,
            Role = enteredDetails.Role

        };
            
            _webAppcontext.Users.Add(user);
            _webAppcontext.SaveChanges();

            return ("registered");

        }
        public string deleteHandler(deleteInfo toDelete)
        {
            //Users user = new Users();
            Users output = _webAppcontext.Users.Find(toDelete.RId);
            if (output == null)
            {
                return ("nothing to delete");
            }
            _webAppcontext.Users.Remove(output);
            _webAppcontext.SaveChanges();

            return ("deleted");

        }
        public string updateHandler(UserInfo updatedDetails)
        {
            Users user = _webAppcontext.Users.Find(updatedDetails.RId);
            user.Name = updatedDetails.Name;
            user.Username = updatedDetails.Username;
            user.Email = updatedDetails.Email;
            user.Password = updatedDetails.Password;
            user.ProjectId = updatedDetails.ProjectId;
            user.Role = updatedDetails.Role;
            _webAppcontext.SaveChanges();
            return ("Student updated");
        }

        public List<Users> listHandler()
        {
            List<Users> output = _webAppcontext.Users.ToList();
            return (output);
        }



    }
}

