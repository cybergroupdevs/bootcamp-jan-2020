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

namespace UserAuthorization.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        public IConfiguration _config;
        DbOperations.IDbOperations _dbOperations;
        public LoginController(DbOperations.IDbOperations dbOperations, IConfiguration config)
        {
            _dbOperations = dbOperations;
            _config = config;
        }

        [HttpPost]
        public IActionResult logIn([FromBody] CustomModels.CustomEmployee customEmployee)
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

        private string GenerateJSONWebToken(CustomModels.CustomEmployee loginInfo)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new[] {
                new Claim(JwtRegisteredClaimNames.Sub, _config["Jwt:Issuer"]),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
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

        private CustomModels.CustomEmployee AuthenticateUser(CustomModels.CustomEmployee credentials)
        {
            CustomModels.CustomEmployee user = null;
            user = _dbOperations.checkUser(credentials);
            return user;
        }
    }
}