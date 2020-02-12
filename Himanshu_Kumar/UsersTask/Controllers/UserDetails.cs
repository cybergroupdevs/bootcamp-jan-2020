using System.Security.Claims;

namespace UsersTask.Controllers
{
    internal class UserDetails
    {
        public ClaimsIdentity Jobrole { get; internal set; }
        public ClaimsIdentity Email { get; internal set; }
    }
}