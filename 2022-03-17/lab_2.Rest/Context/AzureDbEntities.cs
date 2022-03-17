using lab_2.Rest.Models;
using Microsoft.EntityFrameworkCore;

namespace lab_2.Rest.Context
{
    public class AzureDbEntities : DbContext
    {
        public AzureDbEntities(DbContextOptions<AzureDbEntities> options)
            : base(options)
        {
        }

        protected AzureDbEntities()
        {
        }

        public DbSet<Person> People { get; set; }
    }
}