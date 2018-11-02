export class ElectionArea {
    name: string;
    totalScore: number;
    standardScore: number;
    goalScore: number;
    expectedScore: number;
    missingScore: number;
    percentTotalScore: number;
    percentStandardScore: number;
    percentGoalScore: number;
    percentExpectedScore: number;
    percentMissingScore: number;
}

export class PoliticalParty {
    name: string;
    percent: number;
    totalMember: number;
    districtMember: number;
    partyList: number;
}

export class District {
    tag: string;
    name: string;
    totalVote: number;
    goal: number;
    vote: number;
    PartyInDistricts: PartyInDistrict[];
    goalD1:number;
    goalD2:number;
    goalD3:number;
    goalD4:number;

    voteD1: number;
    voteD2: number;
    voteD3: number;
    voteD4: number;

}

export class PartyInDistrict {
    name: string;
    vote: number;
}

export class GlobalVarible {
    static PoliticalParties: PoliticalParty[];

    static Districts: District[];

    // static PheuThai: PoliticalParty;
    // static Democrat: PoliticalParty;
    // static Palangpracharath: PoliticalParty;
    // static FutureForward: PoliticalParty;
    // static Bhumjaithai: PoliticalParty;
    // static Others: PoliticalParty;
}