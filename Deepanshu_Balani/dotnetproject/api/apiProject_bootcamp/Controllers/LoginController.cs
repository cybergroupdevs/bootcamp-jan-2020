using api_new2.DbModels;
using Microsoft.AspNetCore.Authorization;  
using Microsoft.AspNetCore.Mvc;  
using Microsoft.Extensions.Configuration;  
using Microsoft.IdentityModel.Tokens;  
using System;  
using System.IdentityModel.Tokens.Jwt;  
using System.Security.Claims;  
using System.Text;
//jwt authentication
namespace apiProject_bootcamp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : Controller
    {
        private IConfiguration _config;

        public LoginController(IConfiguration config)
        {
            _config = config;
        }
        [AllowAnonymous]
        [HttpPost]
        public IActionResult Login([FromBody]request login)

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

        private string GenerateJSONWebToken(request userInfo)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(_config["Jwt:Issuer"],
              _config["Jwt:Issuer"],
              null,
              expires: DateTime.Now.AddMinutes(120),
              signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        private request AuthenticateUser(request login)
        {
            request user = null;

            //Validate the User Credentials  
            //Demo Purpose, I have Passed HardCoded User Information  
            if (login.Role == "Admin")
            {
                user = new request { Email = "vishivish@gmail.com", Password = "vishvish" };
            }
            return user;
        }

    }
}