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
using project3_company.CustomModels.Models;
using project3_company.CustomModels.Repositories;
using project3_company.DbModels;

namespace project3_company.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private IConfiguration _config;

        public LoginController(IConfiguration config)
        {
            _config = config;   
        }


        [AllowAnonymous]
        [HttpPost]
        public IActionResult CreateToken([FromBody]ILogin login)
        {
            IActionResult response = Unauthorized();
            var employee = Authenticate(login);

            if (employee != null)
            {
                var tokenString = BuildToken(employee);
                response = Ok(new { token = tokenString });
            }

            return response;
        }

        private string BuildToken(Employee employee)
        {
            var claims = new[] {
                new Claim("Role", employee.Role),
                new Claim(JwtRegisteredClaimNames.Email, employee.Email),
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

        private Employee Authenticate(ILogin enteredDetails)
        {
            Login login = new Login(enteredDetails);
            Employee employee = login.loginHandler();

            return employee;
        }


        //[HttpPost]
        //public IActionResult Post([FromBody] ILogin enteredDetails)
        //{
        //    Login login = new Login(enteredDetails);
        //    return Ok(login.loginHandler());
        //}
    }
}