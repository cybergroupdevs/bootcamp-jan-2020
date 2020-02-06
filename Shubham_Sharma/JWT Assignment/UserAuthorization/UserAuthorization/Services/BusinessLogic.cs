using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Principal;
using System.Text;
using System.Threading.Tasks;

namespace UserAuthorization.Services
{
    public interface IBusinessLogic
    {
        Boolean checkUserAuthentication(String token);
    }
    public class BusinessLogic : IBusinessLogic
    {
        public IConfiguration _config;
        public BusinessLogic(IConfiguration config)
        {
            _config = config;
        }

        public bool checkUserAuthentication(string authToken)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var validationParameters = GetValidationParameters();

            SecurityToken validatedToken;
            try
            {
                IPrincipal principal = tokenHandler.ValidateToken(authToken, validationParameters, out validatedToken);
                return true;
            }
            catch(Exception e)
            {
                return false;
            }
        }

        private TokenValidationParameters GetValidationParameters()
        {
            return new TokenValidationParameters()
            {
                ValidateLifetime = true, // Because there is no expiration in the generated token
                ValidateAudience = true, // Because there is no audiance in the generated token
                ValidateIssuer = true,   // Because there is no issuer in the generated token
                ValidIssuer = "EmployeeJWTAssign",
                ValidAudience = "EmployeeJWTAssign",
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"])) // The same key as the one that generate the token
            };
        }

        //public bool checkUserAuthentication(String token)
        //{
        //    var parts = token.Split('.');

        //    var header = parts[0];
        //    var payload = parts[1];
        //    var jwtSignature = parts[2];

        //    var headerJson = Encoding.UTF8.GetString(Base64UrlDecode(header));
        //    var headerData = JObject.Parse(headerJson);
        //    var payloadJson = Encoding.UTF8.GetString(Base64UrlDecode(payload));
        //    var payloadData = JObject.Parse(payloadJson);

        //    var bytesToSign = Encoding.UTF8.GetBytes(string.Concat(header, ".", payload));
        //    var keyBytes = Encoding.UTF8.GetBytes(_config["Jwt:Key"]);
        //    var algorithm = (string)headerData["alg"];
        //    var computedJwtSignature = Encoding.UTF8.GetString(HashAlgorithms[GetHashAlgorithm(algorithm)](keyBytes, bytesToSign));
        //    // var decodedCrypto = Convert.ToBase64String(crypto);
        //    // var decodedSignature = Convert.ToBase64String(signature);

        //    if (jwtSignature != computedJwtSignature)
        //    {
        //        throw new ApplicationException(string.Format("Invalid signature. Expected {0} got {1}", decodedCrypto, decodedSignature));
        //    }
        //}
    }
}
