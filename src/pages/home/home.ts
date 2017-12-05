import { Component } from '@angular/core';
import {NavController, NavParams, Platform} from 'ionic-angular';
import {CreatePage} from "../create/create";
import {AdvancePage} from "../advance/advance";
import {AccomplishmentPage} from "../accomplishment/accomplishment";
import {AboutUsPage} from "../about-us/about-us";
import {DataBaseProvider} from "../../providers/data-base/data-base";

import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  info: any = {
    generalProgress: 0
  };
  decimals = new DecimalPipe("");
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private databaseProvider: DataBaseProvider, private plt: Platform) {
  }

  ionViewDidEnter() {
    this.plt.ready().then(() => {
      this.databaseProvider.getDatabaseState().subscribe(rdy => {
        if (rdy) {
          this.databaseProvider.getGeneralProgress().then(result=>{
            this.info.generalProgress = result.progress;
          });
        }
      });
    });
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
    if (page === 'aboutUs') {
      this.navCtrl.push(AboutUsPage);
    }
  }

}
