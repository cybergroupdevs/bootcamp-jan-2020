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

namespace UsersTask.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        public IConfiguration _config;
        DbOps.IDbOps _dbOps;
        public LoginController(DbOps.IDbOps dbOps, IConfiguration config)
        {
            _dbOps = dbOps;
            _config = config;
        }

        [HttpPost]
        public IActionResult logIn([FromBody] CustomModels.customUsers customUser)
        {
            IActionResult response = Unauthorized();
            var user = AuthenticateUser(customUser);

            if (user != null)
            {
                var tokenString = GenerateJSONWebToken(user);
                response = Ok(new { token = tokenString });
            }
            return response;
        }

        private string GenerateJSONWebToken(CustomModels.customUsers loginInfo)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new[] {
                new Claim(JwtRegisteredClaimNames.Sub, _config["Jwt:Issuer"]),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(JwtRegisteredClaimNames.Iat, DateTime.UtcNow.ToString()),
                new Claim("Namee", loginInfo.Namee),
                new Claim("Email", loginInfo.Email),
                new Claim("JobRole", loginInfo.Jobrole)
            };


            var token = new JwtSecurityToken(_config["Jwt:Issuer"],
              _config["Jwt:Issuer"],
              claims,
              expires: DateTime.Now.AddMinutes(120),
              signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        private CustomModels.customUsers AuthenticateUser(CustomModels.customUsers usersDetails)
        {
            CustomModels.customUsers user = null;
            user = _dbOps.checkUser(usersDetails);
            return user;
        }
    }
}