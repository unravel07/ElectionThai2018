import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalVarible, PoliticalParty } from '../../app/models';

@IonicPage()
@Component({
  selector: 'page-chart',
  templateUrl: 'chart.html',
})
export class ChartPage {

  politicalParties: PoliticalParty[];

  constructor(public navCtrl: NavController) {

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
        totalMember: 78,
        districtMember: 60,
        partyList: 18,
      }, {
        name: 'ภูมิใจไทย',
        percent: 6,
        totalMember: 30,
        districtMember: 19,
        partyList: 11,
      }, {
        name: 'อื่นๆ',
        percent: 4,
        totalMember: 22,
        districtMember: 11,
        partyList: 11,
      }]
    }
    this.politicalParties = GlobalVarible.PoliticalParties;
  }
}
