using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApplicationPanel.DbModels;

namespace WebApplicationPanel.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class getController : Controller
    {
        panelContext _panelContext;

        //private object panelContext;
        //private object panel;

        public getController(panelContext panelContext)
        {
            _panelContext = panelContext;
        }
        [HttpGet]
        public IActionResult Get()
        {
            List<EmpInformation> output = _panelContext.EmpInformation.ToList();
            return Ok(output);
        }
    }
}