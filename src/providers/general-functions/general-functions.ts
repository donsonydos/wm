import { Injectable } from '@angular/core';
import {HomePage} from "../../pages/home/home";

/*
  Generated class for the GeneralFunctionsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GeneralFunctionsProvider {

  constructor() {
    console.log('Hello GeneralFunctionsProvider Provider');
  }

  gotoHome(navCtrl) {
    navCtrl.setRoot(HomePage);
  }

}
