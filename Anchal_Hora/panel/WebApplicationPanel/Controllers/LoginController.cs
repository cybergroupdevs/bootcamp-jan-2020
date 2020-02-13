using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using WebApplicationPanel.DbModels;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebappAPItype.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class LoginController : Controller
    {
        private panelContext _panelcontext;
        private IConfiguration _config;
        private panelContext _panelContext;

        public LoginController(IConfiguration config, panelContext panelcontext)

        {
            _panelcontext = panelcontext;
            _config = config;
        }

        [HttpPost]
        public IActionResult Login([FromBody] EmpInformation login)
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

        private object GenerateJSONWebToken(object user)
        {
            throw new NotImplementedException();
        }

        private string GenerateJSONWebToken(EmpInformation userInfo)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            var claims = new[] {
           new Claim("Name", userInfo.Name),
           new Claim("Email", userInfo.Email),
           new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
    };


            var token = new JwtSecurityToken(_config["Jwt:Issuer"],
           _config["Jwt:Issuer"],
           claims,
           expires: DateTime.Now.AddMinutes(120),
           signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        private EmpInformation AuthenticateUser(EmpInformation login)
        {
            EmpInformation user = _panelcontext.EmpInformation.Where(u => u.Sno == login.Sno && u.Password == login.Password).FirstOrDefault();
            if (user != null)
            {
                user = new EmpInformation { Email = user.Email, Name=user.Name };
            }
            return user;
        }
    }
}
