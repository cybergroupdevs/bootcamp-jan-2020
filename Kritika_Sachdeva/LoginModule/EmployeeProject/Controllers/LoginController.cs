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

namespace EmployeeProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private IConfiguration _config;
        public DbModels.projectContext _projectContext;

        public LoginController(IConfiguration config, DbModels.projectContext context)
        {
            _config = config;
            _projectContext = context;
        }
        [AllowAnonymous]
        [HttpPost]
        public IActionResult LoginToken([FromBody]CustomModels.Credentials login)
        {
            IActionResult response = Unauthorized();
            var user = AuthenticateUser(login);

            if (user != null)
            {
                var tokenString = GenerateJSONWebToken(user);
                response = Ok(new { token = tokenString });
            }

            return response;
        }

        private string GenerateJSONWebToken(DbModels.Temployee userInfo)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new[] {
            new Claim(JwtRegisteredClaimNames.Sub, _config["Jwt:Issuer"]),
            new Claim(JwtRegisteredClaimNames.Email, userInfo.EmpEmail),
            new Claim("Urole", userInfo.EmpRole),
            new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

            var token = new JwtSecurityToken(_config["Jwt:Issuer"],
              _config["Jwt:Issuer"],
              claims,
              expires: DateTime.Now.AddMinutes(120),
              signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        private DbModels.Temployee AuthenticateUser(CustomModels.Credentials details)
        {
            //DbModels.UserModel user = null;

            DbModels.Temployee user = _projectContext.Temployee.Where(x => x.EmpEmail == details.EmpEmail && x.EmpPassword == details.EmpPassword).FirstOrDefault();
            //Validate the User Credentials  
            //Demo Purpose, I have Passed HardCoded User Information  
            if (user != null)
            {
                user = new DbModels.Temployee { EmpName = user.EmpName, EmpEmail = user.EmpEmail, EmpPassword = user.EmpPassword, EmpRole = user.EmpRole };
            }


            return user;

        }
    }
}