import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ElectionArea, District } from '../../app/models';

/**
 * Generated class for the InfoDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info-detail',
  templateUrl: 'info-detail.html',
})
export class InfoDetailPage {

  district: District = new District;
  percentGoal: number;
  percentVote: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoDetailPage');
  }

  ionViewDidEnter() {
    this.district = this.navParams.data._dis;
    this.percentGoal = Math.round(this.district.goal * 100 / this.district.totalVote);
    this.percentVote = Math.round(this.district.vote * 100 / this.district.totalVote);
  }



}
