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
using WebApplication2.Custom_Models;

namespace WebApplication2.controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        public IConfiguration _configuration;
        public Models.companyinfoContext _cSharpTrainingContext;
        public LoginController(IConfiguration config, WebApplication2.Models.companyinfoContext context)
        {
            _configuration = config;
            _cSharpTrainingContext = context;
        }

        [AllowAnonymous]
        [HttpPost]
        public IActionResult Login([FromBody]Custom_Models.tcompanycustom loginRequest)
        {
            IActionResult response = Unauthorized();
            var user = AuthenticateUser(loginRequest);

            if (user != null)
            {
                var tokenString = GenerateJSONWebToken(user);
                response = Ok(new { token = tokenString });
            }

            return response;
        }

      
        private string GenerateJSONWebToken(WebApplication2.Custom_Models.tcompanycustom loginInfo)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new[] {
                        new Claim(JwtRegisteredClaimNames.Sub, _configuration["Jwt:Issuer"]),
                        new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                        new Claim(JwtRegisteredClaimNames.Iat, DateTime.UtcNow.ToString()),
                        new Claim("Name", loginInfo.Name),
                        new Claim("Email", loginInfo.Email),
                        new Claim("PhoneNo", loginInfo.PhoneNo)
                    };

            var token = new JwtSecurityToken(_configuration["Jwt:Issuer"],
              _configuration["Jwt:Issuer"],
              claims,
              expires: DateTime.Now.AddMinutes(120),
              signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
        private WebApplication2.Custom_Models.tcompanycustom AuthenticateUser(tcompanycustom login)
        {
            WebApplication2.Custom_Models.tcompanycustom user = null;

            //Validate the User Credentials  
            //Demo Purpose, I have Passed HardCoded User Information  
            Models.Tcompanydata employee = _cSharpTrainingContext.Tcompanydata.Where(x => x.Email == login.Email && x.Password == login.Password).FirstOrDefault();
            if (employee != null)
            {
                user = new WebApplication2.Custom_Models.tcompanycustom { Name = employee.Name, Email = employee.Email, PhoneNo = employee.PhoneNo };
            }
            return user;
        }
    }
}