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
    public class deleteController : Controller
    {
        panelContext _panelContext;

        //private object panelContext;
        //private object panel;

        public deleteController(panelContext panelContext)
        {
            _panelContext = panelContext;
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