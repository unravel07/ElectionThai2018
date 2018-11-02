import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PoliticalParty, GlobalVarible } from '../../app/models';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  chartE: string;
  politicalParties: PoliticalParty[];
  public barChartLabels: string[];
  // public barChartLabels: string[] = ['เพื่อไทย', 'ประชาธิปัตย์', 'พลังประชารัฐ', 'อนาคตใหม่', 'ภูมิใจไทย', 'อื่นๆ'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartData: any[];
  public barChartDataDistrict: any[];
  public barChartDataPartyList: any[];

  constructor(public navCtrl: NavController) {

    this.chartE = "totlaMembers";

    if (GlobalVarible.PoliticalParties == null) {
      GlobalVarible.PoliticalParties = [{
        name: 'เพื่อไทย',
        percent: 30,
        totalMember: 150,
        districtMember: 100,
        partyList: 50,
      }, {
        name: 'ประชาธิปัตย์',
        percent: 24,
        totalMember: 120,
        districtMember: 90,
        partyList: 30,
      }, {
        name: 'พลังประชารัฐ',
        percent: 20,
        totalMember: 100,
        districtMember: 70,
        partyList: 30,
      }, {
        name: 'อนาคตใหม่',
        percent: 16,
        totalMember: 80,
        districtMember: 60,
        partyList: 20,
      }, {
        name: 'ภูมิใจไทย',
        percent: 6,
        totalMember: 30,
        districtMember: 20,
        partyList: 10,
      }, {
        name: 'อื่นๆ',
        percent: 4,
        totalMember: 20,
        districtMember: 10,
        partyList: 10,
      }]
    }
    this.politicalParties = GlobalVarible.PoliticalParties;
    this.barChartLabels = [this.politicalParties[0].name, this.politicalParties[1].name, this.politicalParties[2].name, this.politicalParties[3].name, this.politicalParties[4].name, this.politicalParties[5].name];
    this.barChartData = [
      { data: [this.politicalParties[0].totalMember, this.politicalParties[1].totalMember, this.politicalParties[2].totalMember, this.politicalParties[3].totalMember, this.politicalParties[4].totalMember, this.politicalParties[5].totalMember], label: 'จำนวนสมาชิกวุฒิสภาทั้งหมด' }

    ];

    this.barChartDataDistrict = [
      { data: [this.politicalParties[0].districtMember, this.politicalParties[1].districtMember, this.politicalParties[2].districtMember, this.politicalParties[3].districtMember, this.politicalParties[4].districtMember, this.politicalParties[5].districtMember], label: 'จำนวนสมาชิกวุฒิสภาแบบแบ่งเขต' }
    ]

    this.barChartDataPartyList = [
      { data: [this.politicalParties[0].partyList, this.politicalParties[1].partyList, this.politicalParties[2].partyList, this.politicalParties[3].partyList, this.politicalParties[4].partyList, this.politicalParties[5].partyList], label: 'จำนวนสมาชิกวุฒิสภาแบบสัดส่วน' }
    ]


  }


  ionViewDidEnter() {

  }

}
