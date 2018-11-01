import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InfoDetailPage } from '../info-detail/info-detail';
import { ElectionArea } from '../../app/models';

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

  area1 : ElectionArea = new ElectionArea;
  area2 : ElectionArea = new ElectionArea;
  area3 : ElectionArea = new ElectionArea;
  area4 : ElectionArea = new ElectionArea;
  area5 : ElectionArea = new ElectionArea;
  area6 : ElectionArea = new ElectionArea;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // area1
    this.area1.name = "กรุงเทพ เขต 1";
    this.area1.totalScore = 80000;
    this.area1.standardScore = 40000;
    this.area1.expectedScore = 40000;
    this.area1.goalScore = 40000;
    this.area1.missingScore = 5000;
    this.area1.percentTotalScore = 100;
    this.area1.percentStandardScore = 50;
    this.area1.percentExpectedScore = 50;
    this.area1.percentGoalScore = 43.75;
    this.area1.percentMissingScore = 6.75;
    // area2
    this.area2.name = "กรุงเทพ เขต 2";
    this.area2.totalScore = 90000;
    this.area2.standardScore = 50000;
    this.area2.expectedScore = 50000;
    this.area2.goalScore = 50000;
    this.area2.missingScore = 6000;
    this.area2.percentTotalScore = 100;
    this.area2.percentStandardScore = 50;
    this.area2.percentExpectedScore = 50;
    this.area2.percentGoalScore = 43.75;
    this.area2.percentMissingScore = 6.75;
    // area3
    this.area3.name = "กรุงเทพ เขต 3";
    this.area3.totalScore = 60000;
    this.area3.standardScore = 30000;
    this.area3.expectedScore = 30000;
    this.area3.goalScore = 30000;
    this.area3.missingScore = 8000;
    this.area3.percentTotalScore = 300;
    this.area3.percentStandardScore = 50;
    this.area3.percentExpectedScore = 50;
    this.area3.percentGoalScore = 43.75;
    this.area3.percentMissingScore = 6.75;
    // area4
    this.area4.name = "กรุงเทพ เขต 4";
    this.area4.totalScore = 40000;
    this.area4.standardScore = 10000;
    this.area4.expectedScore = 10000;
    this.area4.goalScore = 15000;
    this.area4.missingScore = 2000;
    this.area4.percentTotalScore = 400;
    this.area4.percentStandardScore = 50;
    this.area4.percentExpectedScore = 50;
    this.area4.percentGoalScore = 43.75;
    this.area4.percentMissingScore = 6.75;
    // area5
    this.area5.name = "กรุงเทพ เขต 5";
    this.area5.totalScore = 50000;
    this.area5.standardScore = 30000;
    this.area5.expectedScore = 30000;
    this.area5.goalScore = 30000;
    this.area5.missingScore = 1000;
    this.area5.percentTotalScore = 500;
    this.area5.percentStandardScore = 50;
    this.area5.percentExpectedScore = 50;
    this.area5.percentGoalScore = 43.75;
    this.area5.percentMissingScore = 6.75;
    // area6
    this.area6.name = "กรุงเทพ เขต 6";
    this.area6.totalScore = 60000;
    this.area6.standardScore = 50000;
    this.area6.expectedScore = 50000;
    this.area6.goalScore = 50000;
    this.area6.missingScore = 2000;
    this.area6.percentTotalScore = 600;
    this.area6.percentStandardScore = 50;
    this.area6.percentExpectedScore = 50;
    this.area6.percentGoalScore = 43.75;
    this.area6.percentMissingScore = 6.75;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  GoInfoDetail(areaT : ElectionArea) {

    this.navCtrl.push(InfoDetailPage,{_area : areaT});
  }

}
