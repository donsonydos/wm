import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Media, MediaObject} from "@ionic-native/media";
import {GeneralFunctionsProvider} from "../../providers/general-functions/general-functions";

/**
 * Generated class for the GoalAccomplishPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-goal-accomplish',
  templateUrl: 'goal-accomplish.html',
})
export class GoalAccomplishPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private media: Media,
              private generalFunctions: GeneralFunctionsProvider) {
  }

  ionViewDidLoad() {
    const file: MediaObject = this.media.create('file:///android_asset/www/assets/sounds/Tada.mp3');

    file.onStatusUpdate.subscribe(status => console.log('archivo mp3', status)); // fires when file status changes

    file.onSuccess.subscribe(() => console.log('Action is successful'));

    file.onError.subscribe(error => console.log('Error!', error));

// play the file
    file.play();
    console.log('deberia sonar el tada');
  }

}
