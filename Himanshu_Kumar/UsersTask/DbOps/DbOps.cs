using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using UsersTask.CustomModels;

namespace UsersTask.DbOps
{
    public interface IDbOps
    {
        Boolean insertData(CustomModels.customUsers userDetails);
        CustomModels.customUsers checkUser(CustomModels.customUsers customusers);
    }
    public class DbOps : IDbOps
    {
        private readonly DbModels.csharpTaskContext _csharpTaskContext;
        //private object employee;

        public DbOps(DbModels.csharpTaskContext csharpTaskContext)
        {
            _csharpTaskContext = csharpTaskContext;
        }


        public bool insertData(customUsers userDetails)
        {
            try
            {
                DbModels.Userdetails user = new DbModels.Userdetails()
                {
                    Namee = userDetails.Namee,
                    Gender = userDetails.Gender,
                    Age = userDetails.Age,
                    Email = userDetails.Email,
                    Pass = userDetails.Pass,
                    Jobrole = userDetails.Jobrole,
                };

                _csharpTaskContext.Userdetails.Add(user);
                _csharpTaskContext.SaveChanges();
                return true;
            }
            catch (SqlException sqla)
            {
                return false;
            }
        }

        public customUsers checkUser(customUsers customusers)
        {
            CustomModels.customUsers cu = null;
            DbModels.Userdetails user = _csharpTaskContext.Userdetails.Where(x => x.Email == customusers.Email && x.Pass == customusers.Pass).FirstOrDefault();
            if (user != null)
            {
                cu = new CustomModels.customUsers
                {
                    Namee = user.Namee,
                    Gender = user.Gender,
                    Age = user.Age,
                    Email = user.Email,
                    Pass = user.Pass,
                    Jobrole = user.Jobrole,
                    
                };
                return cu;
            }
            return cu;
        }
    }
}
