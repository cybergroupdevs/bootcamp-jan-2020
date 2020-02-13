using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebappAPItype.CustomModels;
using WebApplicationPanel.CustomModels;
using WebApplicationPanel.DbModels;

namespace WebApplicationPanel.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class updateController : Controller
    {
        panelContext _panelContext;

        //private object panelContext;
        //private object panel;

        public updateController(panelContext panelContext)
        {
            _panelContext = panelContext;
        }
        [HttpPut("{id}")]

        public IActionResult Put(int id, [FromBody]UpdateRequest updateRequest)
        {
            EmpInformation panel = _panelContext.EmpInformation.Find(id);
            panel.Sno = updateRequest.Sno;
            panel.Name = updateRequest.Name;
            panel.Email = updateRequest.Email;
            panel.Password = updateRequest.Password;
            _panelContext.EmpInformation.Update(panel);
            _panelContext.SaveChanges();
            return Ok("Employee updated");

        }
    }
}