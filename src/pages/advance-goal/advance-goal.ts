import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GeneralFunctionsProvider} from "../../providers/general-functions/general-functions";
import {SentencesProvider} from "../../providers/sentences/sentences";
import {SocialSharing} from "@ionic-native/social-sharing";
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

  sentence:any = {
    author: "",
    sentence: "",
    id: 0
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private socialSharing: SocialSharing,
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

  sharWithFacebook() {
    this.socialSharing.shareViaFacebook(this.sentence.sentence + ' - ' + this.sentence.author,this.sentence.imageUrl,"");
  }
  shareWithWhatsApp() {
    console.log("Frase", this.sentence);
    this.socialSharing.shareViaWhatsApp(this.sentence.sentence + ' - ' + this.sentence.author,this.sentence.imageUrl,"");
  }
  shareWithInstagram() {
    console.log("Frase", this.sentence);
    this.socialSharing.shareViaInstagram(this.sentence.sentence + ' - ' + this.sentence.author,this.sentence.imageUrl);
  }
}
