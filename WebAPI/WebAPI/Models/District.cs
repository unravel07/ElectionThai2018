using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class District
    {
        public string Name { get; set; }
        public int Goal { get; set; }
        public int GoalD1 { get; set; }
        public int GoalD2 { get; set; }
        public int GoalD3 { get; set; }
        public int GoalD4 { get; set; }
        public int Vote { get; set; }
        public int VoteD1 { get; set; }
        public int VoteD2 { get; set; }
        public int VoteD3 { get; set; }
        public int VoteD4 { get; set; }
        public string Tag { get; set; }
        public List<PartyInDistrict> PartyInDistricts { get; set; }
    }
}
