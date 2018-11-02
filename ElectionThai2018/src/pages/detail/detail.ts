import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InfoDetailPage } from '../info-detail/info-detail';
import { ElectionArea, District, GlobalVarible, PartyInDistrict } from '../../app/models';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  districts: District[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  ionViewDidEnter() {
    if (GlobalVarible.Districts == null) {
      GlobalVarible.Districts = [{
        name: 'ศรีสะเกษ เขต 1',
        totalVote: 134472,
        goal: 50000,
        vote: 47834,
        PartyInDistricts: [{
          name: 'เพื่อไทย',
          vote: 47834,
        },{
          name: 'ชาติพัฒนา',
          vote: 33838,
        },{
          name: 'ประชาธิปัตย์',
          vote: 10388,
        }],
      },{
        name: 'ศรีสะเกษ เขต 2',
        totalVote: 132776,
        goal: 80000,
        vote: 71713,
        PartyInDistricts: [{
          name: 'เพื่อไทย',
          vote: 71713,
        },{
          name: 'มาตุภูมิ',
          vote: 9185,
        },{
          name: 'ประชาธิปัตย์',
          vote: 5844,
        }],
      },{
        name: 'ศรีสะเกษ เขต 3',
        totalVote: 131929,
        goal: 40000,
        vote: 26252,
        PartyInDistricts: [{
          name: 'ภูมิใจไทย',
          vote: 31805,
        },{
          name: 'ชาติพัฒนา',
          vote: 30315,
        },{
          name: 'เพื่อไทย',
          vote: 26252,
        }],
      },{
        name: 'ศรีสะเกษ เขต 4',
        totalVote: 133134,
        goal: 80000,
        vote: 72225,
        PartyInDistricts: [{
          name: 'เพื่อไทย',
          vote: 47834,
        },{
          name: 'ประชาธิปัตย์',
          vote: 8201,
        },{
          name: 'เพื่อแผ่นดิน',
          vote: 157,
        }],
      },{
        name: 'ศรีสะเกษ เขต 5',
        totalVote: 129147,
        goal: 70000,
        vote: 56689,
        PartyInDistricts: [{
          name: 'เพื่อไทย',
          vote: 56689,
        },{
          name: 'ชาติพัฒนา',
          vote: 20791,
        },{
          name: 'ประชาธิปัตย์',
          vote: 4680,
        }],
      },{
        name: 'ศรีสะเกษ เขต 6',
        totalVote: 127641,
        goal: 60000,
        vote: 50913,
        PartyInDistricts: [{
          name: 'เพื่อไทย',
          vote: 50913,
        },{
          name: 'ชาติพัฒนา',
          vote: 29546,
        },{
          name: 'ประชาธิปัตย์',
          vote: 2120,
        }],
      },{
        name: 'ศรีสะเกษ เขต 7',
        totalVote: 132980,
        goal: 60000,
        vote: 49384,
        PartyInDistricts: [{
          name: 'เพื่อไทย',
          vote: 49384,
        },{
          name: 'ภูมิใจไทย',
          vote: 38203,
        },{
          name: 'ประชาธิปัตย์',
          vote: 1644,
        }],
      },{
        name: 'ศรีสะเกษ เขต 8',
        totalVote: 131204,
        goal: 70000,
        vote: 75133,
        PartyInDistricts: [{
          name: 'เพื่อไทย',
          vote: 75133,
        },{
          name: 'ภูมิใจไทย',
          vote: 6332,
        },{
          name: 'ประชาธิปัตย์',
          vote: 4311,
        }],
      }]
    }

    this.districts = GlobalVarible.Districts;
  }

  GoInfoDetail(dis: District) {

    this.navCtrl.push(InfoDetailPage, { _dis: dis });
  }

}
