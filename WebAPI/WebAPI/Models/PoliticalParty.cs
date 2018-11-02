using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class PoliticalParty
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public int Percent { get; set; }
        public int TotalMember { get; set; }
        public int DistrictMember { get; set; }
        public int PartyList { get; set; }
    }
}
