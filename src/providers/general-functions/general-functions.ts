import { Injectable } from '@angular/core';
import {HomePage} from "../../pages/home/home";
import {AlertController} from "ionic-angular";
import {LocalNotifications} from "@ionic-native/local-notifications";

/*
  Generated class for the GeneralFunctionsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GeneralFunctionsProvider {

  constructor(private alertCtrl: AlertController, private localNotifications: LocalNotifications) {
    console.log('Hello GeneralFunctionsProvider Provider');
  }

  gotoHome(navCtrl) {
    navCtrl.setRoot(HomePage);
  }

  confirm(title, msg) {
    return new Promise((resolve, reject) => {
      let alert = this.alertCtrl.create({
        title: title,
        subTitle: msg,
        buttons: [
          {
            text: 'Cancelar',
            handler:() => {
              return resolve(false);
            }
          },
          {
            text: 'Aceptar',
            handler:() => {
              return resolve(true);
            }
          }
        ]
      });
      alert.present();
    });
  }

  showAlert(title, msg) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: msg,
      buttons: [
        {
          text: 'Aceptar'
        }
      ]
    });
    alert.present();
  }

  setScheduleLocalNotification(id, title, text, at) {

    if(!at) {
      at = new Date();
    }

    this.localNotifications.schedule({
      id: id,
      title: title,
      text: text,
      at: at,
      sound: ['file:///android_asset/www/assets/sounds/Tada.mp3'],
      actions: [
        { id: 'no',  title: 'Posponer' },
        { id: 'yes', title: 'Avanzar' }
      ]
    });
  }

}
