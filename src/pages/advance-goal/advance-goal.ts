import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GeneralFunctionsProvider} from "../../providers/general-functions/general-functions";
import {SentencesProvider} from "../../providers/sentences/sentences";
/**
 * Generated class for the AdvanceGoalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-advance-goal',
  templateUrl: 'advance-goal.html',
})
export class AdvanceGoalPage {

  sentence = {
    author: "",
    sentence: "",
    id: 0
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public generalFunctions: GeneralFunctionsProvider, private sentencesProvider: SentencesProvider) {
  }

  ionViewDidLoad() {
    this.getRandomSentence();
  }

  getFirstSentence() {
    this.sentencesProvider.selectFirst().then(sentence=> {
      this.sentence = sentence;
    });
  }
  getRandomSentence() {
    this.sentencesProvider.selectRandom().then(sentence=> {
      this.sentence = sentence;
    });
  }
}
