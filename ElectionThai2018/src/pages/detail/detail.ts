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

  track:string ;

  districts: District[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.track="ทั้งหมด";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  ionViewDidEnter() {
    if (GlobalVarible.Districts == null) {
      GlobalVarible.Districts = [{
        tag: 'เสมอ',
        name: 'ศรีสะเกษ เขต 1',
        totalVote: 134472,
        goal: 50000,
        vote: 47834,
        goalD1: 50000,
        goalD2: 50000,
        goalD3: 50000,
        goalD4: 50000,

        voteD1: 48000,
        voteD2: 49000,
        voteD3: 51000,
        voteD4: 47800,

        PartyInDistricts: [{
          name: 'เพื่อไทย',
          vote: 47834,
        }, {
          name: 'ชาติพัฒนา',
          vote: 33838,
        }, {
          name: 'ประชาธิปัตย์',
          vote: 10388,
        }],
      }, {
        tag: 'ชนะ',
        name: 'ศรีสะเกษ เขต 2',
        totalVote: 132776,
        goal: 50000,
        vote: 51713,
        goalD1: 50000,
        goalD2: 50000,
        goalD3: 50000,
        goalD4: 50000,
        
        voteD1: 47000,
        voteD2: 44000,
        voteD3: 59000,
        voteD4: 50050,
        
        PartyInDistricts: [{
          name: 'เพื่อไทย',
          vote: 71713,
        }, {
          name: 'มาตุภูมิ',
          vote: 9185,
        }, {
          name: 'ประชาธิปัตย์',
          vote: 5844,
        }],
      }, {
        tag: 'แพ้',
        name: 'ศรีสะเกษ เขต 3',
        totalVote: 131929,
        goal: 45000,
        vote: 42675,
        goalD1: 45000,
        goalD2: 45000,
        goalD3: 45000,
        goalD4: 45000,
        
        voteD1: 40000,
        voteD2: 43000,
        voteD3: 46000,
        voteD4: 48000,
        
        PartyInDistricts: [{
          name: 'ภูมิใจไทย',
          vote: 31805,
        }, {
          name: 'ชาติพัฒนา',
          vote: 30315,
        }, {
          name: 'เพื่อไทย',
          vote: 26252,
        }],
      }, {
        tag: 'ชนะ',
        name: 'ศรีสะเกษ เขต 4',
        totalVote: 133134,
        goal: 80000,
        vote: 72225,
        goalD1: 80000,
        goalD2: 80000,
        goalD3: 80000,
        goalD4: 80000,
        
        voteD1: 52100,
        voteD2: 54000,
        voteD3: 68000,
        voteD4: 79000,
        
        PartyInDistricts: [{
          name: 'เพื่อไทย',
          vote: 47834,
        }, {
          name: 'ประชาธิปัตย์',
          vote: 8201,
        }, {
          name: 'เพื่อแผ่นดิน',
          vote: 157,
        }],
      }, {
        tag: 'ชนะ',
        name: 'ศรีสะเกษ เขต 5',
        totalVote: 129147,
        goal: 70000,
        vote: 69100,
        goalD1: 70000,
        goalD2: 70000,
        goalD3: 70000,
        goalD4: 70000,
        
        voteD1: 31000,
        voteD2: 46879,
        voteD3: 50000,
        voteD4: 69000,
        
        PartyInDistricts: [{
          name: 'เพื่อไทย',
          vote: 56689,
        }, {
          name: 'ชาติพัฒนา',
          vote: 20791,
        }, {
          name: 'ประชาธิปัตย์',
          vote: 4680,
        }],
      }, {
        tag: 'ชนะ',
        name: 'ศรีสะเกษ เขต 6',
        totalVote: 127641,
        goal: 60000,
        vote: 50913,
        goalD1: 60000,
        goalD2: 60000,
        goalD3: 60000,
        goalD4: 60000,
        
        voteD1: 21300,
        voteD2: 45204,
        voteD3: 54233,
        voteD4: 65000,
        
        PartyInDistricts: [{
          name: 'เพื่อไทย',
          vote: 50913,
        }, {
          name: 'ชาติพัฒนา',
          vote: 29546,
        }, {
          name: 'ประชาธิปัตย์',
          vote: 2120,
        }],
      }, {
        tag: 'ชนะ',
        name: 'ศรีสะเกษ เขต 7',
        totalVote: 132980,
        goal: 60000,
        vote: 59384,
        goalD1: 60000,
        goalD2: 60000,
        goalD3: 60000,
        goalD4: 60000,
        
        voteD1: 55122,
        voteD2: 56258,
        voteD3: 58742,
        voteD4: 56789,
        
        PartyInDistricts: [{
          name: 'เพื่อไทย',
          vote: 49384,
        }, {
          name: 'ภูมิใจไทย',
          vote: 38203,
        }, {
          name: 'ประชาธิปัตย์',
          vote: 1644,
        }],
      }, {
        tag: 'ชนะ',
        name: 'ศรีสะเกษ เขต 8',
        totalVote: 131204,
        goal: 70000,
        vote: 75133,
        goalD1: 70000,
        goalD2: 70000,
        goalD3: 70000,
        goalD4: 70000,
        
        voteD1: 68000,
        voteD2: 71000,
        voteD3: 69000,
        voteD4: 72000,
        
        PartyInDistricts: [{
          name: 'เพื่อไทย',
          vote: 75133,
        }, {
          name: 'ภูมิใจไทย',
          vote: 6332,
        }, {
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
