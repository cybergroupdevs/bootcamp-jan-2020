using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using System.Configuration;
using Microsoft.AspNetCore.Mvc;
using WebApplicationPanel.DbModels;
using WebappAPItype.CustomModels;
using Microsoft.Extensions.Configuration;

namespace WebApplicationPanel.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    

        public class PanelController : ControllerBase
    {
        panelContext _panelContext;
          
            //private object panelContext;
            //private object panel;
           
            public PanelController(panelContext panelContext)
        {
            _panelContext = panelContext;
        }

       // [HttpGet]
        //public IActionResult heyAanchal()
        //{
           // return Ok("Yipeee-Ke-Yay");
        //}
        

        [HttpPost]
        public IActionResult Createpanel([FromBody]PanelRequest panelRequest)
        {
            EmpInformation panel = new EmpInformation();
            panel.Sno = panelRequest.Sno;
            panel.Name = panelRequest.Name;
            panel.Email = panelRequest.Email;
            panel.Password = panelRequest.Password;

            _panelContext.EmpInformation.Add(panel);
            _panelContext.SaveChanges();
            return Ok("Employee Added");

        }

        [HttpPut("{id}")]

        public ActionResult Put(int id, [FromBody]PanelRequest panelRequest)
        {
            EmpInformation panel = _panelContext.EmpInformation.Find(id);
            panel.Email = panelRequest.Email;
            panel.Name = panelRequest.Name;
            panel.Password = panelRequest.Password;
            // _panelContext.EmpInformation.Update(panel);
            _panelContext.SaveChanges();
            return Ok("Employee updated");

        }

        [HttpDelete("{id}")]

        public ActionResult<string> Delete(int id)
        {
            EmpInformation output = _panelContext.EmpInformation.Where(x => x.Sno == id).FirstOrDefault();
            if (output == null)
            {
                return NotFound();
            }
            //EmpInformation e = new EmpInformation { Sno = id };

            _panelContext.EmpInformation.Remove(output);
            _panelContext.SaveChanges();
            return Ok("Employee Deleted");
        }
    }
}
    