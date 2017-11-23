import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GeneralFunctionsProvider} from "../../providers/general-functions/general-functions";

/**
 * Generated class for the CreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})
export class CreatePage {

  maxYear = 2025;

  constructor(public navCtrl: NavController, public navParams: NavParams, public generalFunctions: GeneralFunctionsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePage');
  }

}
