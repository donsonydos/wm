import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GeneralFunctionsProvider} from "../../providers/general-functions/general-functions";

/**
 * Generated class for the AboutUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about-us',
  templateUrl: 'about-us.html',
})
export class AboutUsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public generalFunctions: GeneralFunctionsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutUsPage');
  }

}
