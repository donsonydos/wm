import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GeneralFunctionsProvider} from "../../providers/general-functions/general-functions";

/**
 * Generated class for the AdvancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-advance',
  templateUrl: 'advance.html',
})
export class AdvancePage {

  goalList = [
    {
      title: 'leer libro',
      advancePercentage: '30'
    },
    {
      title: 'estudiar ingles',
      advancePercentage: '90'
    },
    {
      title: 'hacer ejercicio',
      advancePercentage: '60'
    },
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public generalFunctions: GeneralFunctionsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdvancePage');
  }

}
