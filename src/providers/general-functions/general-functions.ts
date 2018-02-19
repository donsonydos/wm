import {Injectable} from '@angular/core';
import {HomePage} from "../../pages/home/home";
import {AlertController} from "ionic-angular";
import {LocalNotifications} from "@ionic-native/local-notifications";
import {File} from "@ionic-native/file";


/*
 Generated class for the GeneralFunctionsProvider provider.

 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
 */
@Injectable()
export class GeneralFunctionsProvider {

  constructor(private alertCtrl: AlertController, private localNotifications: LocalNotifications, private file: File) {
    console.log('Hello GeneralFunctionsProvider Provider');
  }

  gotoHome(navCtrl) {
    navCtrl.setRoot(HomePage);
  }

  localUri = this.file.applicationDirectory;

  arrayTones = [
    'assets/sounds/analog-watch-alarm_daniel-simion.mp3',
    'assets/sounds/fire-truck-air-horn_daniel-simion.mp3',
    'assets/sounds/front-desk-bells-daniel_simon.mp3',
    'assets/sounds/hyena-laugh_daniel-simion.mp3',
    'assets/sounds/old-fashioned-school-bell-daniel_simon.mp3'
  ];

  confirm(title, msg) {
    return new Promise((resolve, reject) => {
      let alert = this.alertCtrl.create({
        title: title,
        subTitle: msg,
        buttons: [
          {
            text: 'Cancelar',
            handler: () => {
              return resolve(false);
            }
          },
          {
            text: 'Aceptar',
            handler: () => {
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

  /**
   * programa las notificaciones
   * @param id
   * @param title
   * @param text
   * @param at
   * @param sound
   */
  setScheduleLocalNotification(id, title, text, at, sound) {

    if (!at) {
      at = new Date();
    }
    this.localNotifications.schedule({
      id: id,
      title: title,
      text: text,
      at: at,
      sound: "file://" + this.arrayTones[sound]/*,
      actions: [
        {id: 'no', title: 'Posponer'},
        {id: 'yes', title: 'Avanzar'}
      ]*/
    });
  }

  getNotifications() {
    this.localNotifications.getAll().then(data => {
      console.log('notificaciones', data);
    })
  }

}
