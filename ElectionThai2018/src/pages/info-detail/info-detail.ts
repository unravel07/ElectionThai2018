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
  public lineChartData:Array<any> = [
    {data: [5000, 6500, 7000, 7500, 8000], label: 'Goal Score'},
    {data: [4000, 6456, 4567, 7600, 7956], label: 'Current Score'},
  ];

  public lineChartLabels:Array<any> = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'];
  public lineChartOptions:any = {
    responsive: true
  };
  // 255,225,51,1.0

  public lineChartColors:Array<any> = [
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
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';


  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoDetailPage');
  }

  ionViewDidEnter() {
    this.district = this.navParams.data._dis;
    this.percentGoal = Math.round(this.district.goal * 100 / this.district.totalVote);
    this.percentVote = Math.round(this.district.vote * 100 / this.district.totalVote);
  }

  showChart() {
   
  }



}
