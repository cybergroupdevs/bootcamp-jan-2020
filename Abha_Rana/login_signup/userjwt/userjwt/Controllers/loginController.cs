using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using userjwt.CustomModels;
using userjwt.DbModels;

namespace userjwt.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class loginController : ControllerBase
    {
        DbModels.usersdbContext _usersdbContext;

        private IConfiguration _config;

        public loginController(IConfiguration config, DbModels.usersdbContext usersdbContext)
        {
            _config = config;
            _usersdbContext = usersdbContext;
        }

        [AllowAnonymous]
        [HttpPost]
        public IActionResult CreateToken([FromBody]CustomModels.loginReq login)
        {
            IActionResult response = Unauthorized();
            var user = Authenticate(login);

            if (user != null)
            {
                var tokenString = BuildToken(user);
                response = Ok(new { token = tokenString });
            }

            return response;
        }

        private string BuildToken(Users user)
        {
            var claims = new[] {
              
               // new Claim(JwtRegisteredClaimNames.Email, user.Email),
                 new Claim(JwtRegisteredClaimNames.Sub, user.Username),
                 //  new Claim("Role", user.Role),
                  // new Claim("Address", user.Address),
                   //  new Claim("Project", user.Project),
                   //   new Claim("ProjectManager", user.ProjectManager),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(_config["Jwt:Issuer"],
              _config["Jwt:Issuer"],
              claims,
              expires: DateTime.Now.AddMinutes(30),
              signingCredentials: creds);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        private Users Authenticate(loginReq Details)
        {
            Users user = _usersdbContext.Users.Where(x => x.Username == Details.Username && x.Password == Details.Password).FirstOrDefault();
            if (user != null)
            {
                user = new Users { Username = user.Username, Email = user.Email, Role = user.Role };
            }
            return user;
        }
    }
}
