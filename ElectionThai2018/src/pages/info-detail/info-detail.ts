import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ElectionArea } from '../../app/models';

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

  areaReceive : ElectionArea = new ElectionArea;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.areaReceive = this.navParams.data._area;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoDetailPage');
  }
  
  ionViewDidEnter() {
    // this.areaReceive = this.navParams.data._area;
  }



}
