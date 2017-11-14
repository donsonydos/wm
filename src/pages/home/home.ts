import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CreatePage} from "../create/create";
import {AdvancePage} from "../advance/advance";
import {AccomplishmentPage} from "../accomplishment/accomplishment";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  info: any = {
    generalProgress: 83
  };

  constructor(public navCtrl: NavController) {

  }

  gotoPage(page) {
    if (page === 'create') {
      this.navCtrl.push(CreatePage);
    }
    if (page === 'advance') {
      this.navCtrl.push(AdvancePage);
    }
    if (page === 'accomplishment') {
      this.navCtrl.push(AccomplishmentPage);
    }
  }

}
