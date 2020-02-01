using Microsoft.AspNetCore.Mvc;
using project3_company.DbModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace project3_company.CustomModels.Repositories
{
    public partial class IJsonResult
    {
        public Boolean status { get; set; }
        public string resultString { get; set; }
    }

    public class Validation
    {
        IJsonResult jsonResult = new IJsonResult();

        public IJsonResult signUpValidation(Employee details)
        {
            if (!(details.Email.Length >= 5))
            {
                jsonResult.status = false;
                jsonResult.resultString = "Email Address must correct and atleast be of 5 characters";
            }
            else if (!(details.FirstName.Length >= 2))
            {
                jsonResult.status = false;
                jsonResult.resultString = "First Name must correct and atleast be of 2 characters";
            }else if(!(details.Password.Length >= 6))
            {
                jsonResult.status = false;
                jsonResult.resultString = "Password must atleast be of 6 characters";
            }

            jsonResult.status = true;
            jsonResult.resultString = "Proceed for generation";

            return jsonResult;
        }
    }
}
