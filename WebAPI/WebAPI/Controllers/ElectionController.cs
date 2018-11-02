using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Authentication;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using WebAPI.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebAPI.Controllers
{
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
    [Route("api/[controller]/[action]")]

    public class ElectionController : Controller
    {
        IMongoCollection<PoliticalParty> PoliticalParty { get; set; }
        IMongoCollection<District> District { get; set; }

        public ElectionController()
        {
            var settings = MongoClientSettings.FromUrl(new MongoUrl("mongodb://krit_NA:thegigclubna2522@ds125322.mlab.com:25322/kritna"));
            settings.SslSettings = new SslSettings()
            {
                EnabledSslProtocols = SslProtocols.Tls12
            };
            var mongoClient = new MongoClient(settings);
            var database = mongoClient.GetDatabase("kritna");
            PoliticalParty = database.GetCollection<PoliticalParty>("PoliticalParty");
            District = database.GetCollection<District>("District");
        }
        
        /// Item

        [HttpGet]
        public IEnumerable<PoliticalParty> GetAllPoliticalParty()
        {
            var parties = PoliticalParty.Find(x => true).ToList();
            return parties;
        }
        
        [HttpGet]
        public IEnumerable<District> GetAllDistrict()
        {
            var districts = District.Find(x => true).ToList();
            return districts;
        }
        
        [HttpPost]
        public void CreatePoliticalParty([FromBody]PoliticalParty party)
        {
            party.Id = Guid.NewGuid().ToString();
            PoliticalParty.InsertOne(party);
        }
        
        
    }
}
