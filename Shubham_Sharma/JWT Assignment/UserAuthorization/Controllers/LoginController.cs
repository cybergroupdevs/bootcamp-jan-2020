using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using UserAuthorization.CustomModels;
using UserAuthorization.DbOperations;

namespace UserAuthorization.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        public IConfiguration _config;
        IDbOperations _dbOperations;
        public LoginController(IDbOperations dbOperations, IConfiguration config)
        {
            _dbOperations = dbOperations;
            _config = config;
        }

        [HttpPost]
        public IActionResult logIn([FromBody] CustomEmployee customEmployee)
        {
            IActionResult response = Unauthorized();
            var user = authenticateUser(customEmployee);

            if (user != null)
            {
                var tokenString = GenerateJSONWebToken(user);
                response = Ok(new { token = tokenString });
            }
            return response;
        }

        private string GenerateJSONWebToken(CustomEmployee loginInfo)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new[] {
                new Claim(JwtRegisteredClaimNames.Sub, _config["Jwt:Issuer"]),
                new Claim(JwtRegisteredClaimNames.Iat, DateTime.UtcNow.ToString()),
                new Claim("UserName", loginInfo.Username),
                new Claim("EmpName", loginInfo.EmpName),
                new Claim("EmpPhone", loginInfo.EmpPhone),
                new Claim("EmpRole", loginInfo.EmpRole)
            };
            

            var token = new JwtSecurityToken(_config["Jwt:Issuer"],
                _config["Jwt:Issuer"],
                claims,
                expires: DateTime.Now.AddMinutes(120),
                signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        private CustomEmployee authenticateUser(CustomEmployee credentials)
        {
            CustomEmployee employee = null;
            employee = _dbOperations.checkUser(credentials);
            return employee;
        }
    }
}