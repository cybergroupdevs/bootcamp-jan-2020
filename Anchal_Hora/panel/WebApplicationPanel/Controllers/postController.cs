using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApplicationPanel.CustomModels;
using WebApplicationPanel.DbModels;

namespace WebApplicationPanel.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class postController : Controller
    {
        panelContext _panelContext;

        //private object panelContext;
        //private object panel;

        public postController(panelContext panelContext)
        {
            _panelContext = panelContext;
        }
        [HttpPost]
        public IActionResult Addpanel([FromBody]PostRequest postRequest)
        {
            EmpInformation panel = new EmpInformation();
            panel.Sno = postRequest.Sno;
            panel.Name = postRequest.Name;
            panel.Email = postRequest.Email;
            panel.Password = postRequest.Password;
            _panelContext.EmpInformation.Add(panel);
            _panelContext.SaveChanges();
            return Ok("Employee Added");

        }
    }
}