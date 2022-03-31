using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using lab_2.Rest.Context;

namespace lab_2.Rest.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PeopleController : ControllerBase
    {
        private readonly AzureDbEntities context;

        public PeopleController(AzureDbEntities context)
        {
            this.context = context;
        }

        public async Task<ActionResult> Get()
        {
            return Ok(await context.People.ToListAsync());
        }
    }
}