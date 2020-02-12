using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using userjwt.DbModels;

namespace userjwt.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class signupController : ControllerBase
    {
        DbModels.usersdbContext _usersdbContext;

        private IConfiguration _config;

        public signupController(IConfiguration config, DbModels.usersdbContext usersdbContext)
        {
            _config = config;
            _usersdbContext = usersdbContext;
        }
        [HttpPost]
        public IActionResult createUser([FromBody]CustomModels.UserRequest userRequest)
        {
            DbModels.Users user = new DbModels.Users();
            user.Username = userRequest.Username;
            user.Password = userRequest.Password;
            user.Email = userRequest.Email;
            user.Name = userRequest.Name;
            user.Project = userRequest.Project;
            user.ProjectManager = userRequest.ProjectManager;
            user.Phone = userRequest.Phone;
            user.Role = userRequest.Role;
            user.Address = userRequest.Address;
            _usersdbContext.Users.Add(user);
            _usersdbContext.SaveChanges();
            return Ok("Record added");
        }
        [HttpPut]
        public IActionResult updateUser([FromBody]CustomModels.UserRequest userRequest)
        {
            Users user = Users.Find(userRequest.Username);
            user.Username = userRequest.Username;
            user.Password = userRequest.Password;
            user.Email = userRequest.Email;
            user.Name = userRequest.Name;
            user.Project = userRequest.Project;
            user.ProjectManager = userRequest.ProjectManager;
            user.Phone = userRequest.Phone;
            user.Role = userRequest.Role;
            user.Address = userRequest.Address;
            _usersdbContext.Users.Add(user);
            _usersdbContext.SaveChanges();
            return Ok("Record updated");
        }

    }
}