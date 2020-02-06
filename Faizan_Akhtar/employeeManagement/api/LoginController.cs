using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;
using EmployeeManagement.Custom_Models;
using EmployeeManagement.DbModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;

namespace EmployeeManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private IConfiguration _config;
        private EmployeeDBContext _employeeDBContext;

        public LoginController(IConfiguration config, EmployeeDBContext employeeDBcontext)
        {
            _config = config;
            _employeeDBContext = employeeDBcontext;
        }
        [AllowAnonymous]
        [HttpPost]
        public IActionResult Login([FromBody]CustomEmployee customEmployee)
        {
            IActionResult response = Unauthorized();
            var user = AuthenticateUser(customEmployee);

            if (user != null)
            {
                var tokenString = GenerateJSONWebToken(user);
                response = Ok(new { token = tokenString });
            }

            return response;
        }

        private string GenerateJSONWebToken(CustomEmployee customEmployee)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);


            var claims = new[]
            {
                //new Claim(JwtRegisteredClaimNames.Sub, _config["Jwt: Issuer"]),
                //new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                //new Claim(JwtRegisteredClaimNames.Iat, DateTime.UtcNow.ToString()),
                new Claim("FName", customEmployee.FName ),
                new Claim("Lname", customEmployee.Lname),
                new Claim("Email", customEmployee.Email)  
            };

            var token = new JwtSecurityToken(_config["Jwt:Issuer"],
              _config["Jwt:Issuer"],
              claims,
              expires: DateTime.Now.AddMinutes(2400),
              signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        private CustomEmployee AuthenticateUser(CustomEmployee customEmployee)
        {
            CustomEmployee user = null;

            //Validate the User Credentials  
            //Demo Purpose, I have Passed HardCoded User Information 
            TEmployee employee = _employeeDBContext.TEmployee.Where(x => x.Email == customEmployee.Email && x.Passwrd == customEmployee.Passwrd).FirstOrDefault();

            if (employee != null)
            {
                user = new CustomEmployee { FName = employee.FName, Lname = employee.Lname, Email = employee.Email};
            }
            return user;
        }
    }
}