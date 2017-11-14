import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AccomplishmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accomplishment',
  templateUrl: 'accomplishment.html',
})
export class AccomplishmentPage {
  goalList = [
    {
      title: 'leer libro',
      timeGoal: '30'
    },
    {
      title: 'estudiar ingles',
      timeGoal: '90'
    },
    {
      title: 'hacer ejercicio',
      timeGoal: '60'
    },
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccomplishmentPage');
  }

}
