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
    this.district = this.navParams.data._dis;
    this.percentGoal = Math.round(this.district.goal * 100 / this.district.totalVote);
    this.percentVote = Math.round(this.district.vote * 100 / this.district.totalVote);
   
    this.lineChartData = [
      {
        data: [this.district.goalD1, this.district.goalD2,
        this.district.goalD3, this.district.goalD4, this.district.goal],
        label: 'Goal Score'
      },
      {
        data: [this.district.voteD1, this.district.voteD2, this.district.voteD3
          , this.district.voteD4, this.district.vote],
        label: 'Current Score'
      },

    ];
  }
  public lineChartData: Array<any>;

  public lineChartLabels: Array<any> = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'];
  public lineChartOptions: any = {
    responsive: true
  };
  // 255,225,51,1.0

  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgb(148,159,177,0.2)',
      borderColor: 'rgb(148,159,177,1)',
      pointBackgroundColor: 'rgb(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: 'rgb( 255,225,51,1.0)',
      pointHoverBorderColor: 'rgb(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgb(77,83,96,0.2)',
      borderColor: 'rgb(77,83,96,1)',
      pointBackgroundColor: 'rgb(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';


  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoDetailPage');
  }

  ionViewDidEnter() {



  }

  showChart() {

  }



}
