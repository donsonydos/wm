import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {GeneralFunctionsProvider} from "../../providers/general-functions/general-functions";
import {DataBaseProvider} from '../../providers/data-base/data-base';
import {AdvancePage} from "../advance/advance";
import {Media, MediaObject} from "@ionic-native/media";
import {CalendarComponent} from "../../components/calendar/calendar";

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
  minYear = new Date().getFullYear();
  maxYear = this.minYear + 5;
  isEdit = false;
  pageName = "CREAR OBJETIVO";

  datesSchedule = [];

  mediaFile: MediaObject;

  task = {
    task_name: "",
    task_intensity: "",
    task_frequency: "",
    task_days: <any> "",
    task_schedule: "",
    task_tone: "",
    task_reward: "",
    task_limit_date: "",
    task_repetitions: 0,
  };

  schedules: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public generalFunctions: GeneralFunctionsProvider, public databaseProvider: DataBaseProvider,
              private media: Media, private modalCtrl: ModalController) {
  }

  ionViewDidEnter() {
    // console.log('tengo estos params', this.navParams);
    if (this.navParams.data.task_id) {
      this.pageName = "EDITAR OBJETIVO";
      this.isEdit = true;
      this.task = this.navParams.data;
      this.task.task_days = this.task.task_days.split(",", 7);
      this.databaseProvider.taskSchedules(this.navParams.data.task_id).then(dataSchedules => {
        this.schedules = dataSchedules;
      });
      this.generalFunctions.getNotifications();
    } else {
      this.pageName = "CREAR OBJETIVO";
      this.isEdit = false;
      this.task.task_name = "";
      this.task.task_intensity = "";
      this.task.task_frequency = "";
      this.task.task_days = "";
      this.task.task_schedule = "";
      this.task.task_tone = "";
      this.task.task_reward = "";
      this.task.task_limit_date = "";
      this.task.task_repetitions = 0;
    }
  }

  /**
   * retorna las fechas correspondientes para realizar la notificación.
   */
  getDatesSchedule() {
    //genera la fecha limite teniendo en cuenta la hora de la tarea.
    console.log('quiere guarar con la fecha', this.generalFunctions.task_limit_date)
    let end = new Date(this.generalFunctions.task_limit_date + 'T' + this.task.task_schedule + ':00-0500');
    // se obtiene la fecha actual para iniciar a buscar las fechas en las que se asignarán las notificaciones
    let currentComplete: any = new Date();
    let d: any = currentComplete.getDate();
    let m: any = currentComplete.getMonth() + 1; //January is 0!
    let yyyy = currentComplete.getFullYear();
    let dd = '' + d;
    let mm = '' + m;

    if (d < 10) {
      dd = '0' + d;
    }
    if (m < 10) {
      mm = '0' + m;
    }
    // se da formato a la fecha actual para inciar la busqueda de fechas
    currentComplete = yyyy + '-' + mm + '-' + dd + 'T' + this.task.task_schedule + ':00-0500';

    this.datesSchedule = [];

    for (var indexDay in this.task.task_days) {
      let day = Number(this.task.task_days[indexDay]);
      // Copy start date
      let current = new Date(currentComplete);

      // Shift to next of required days
      current.setDate(current.getDate() + (day - current.getDay() + 7) % 7);
      // While less than end date, add dates to result array
      while (current <= end) {
        this.datesSchedule.push(new Date(+current));
        current.setDate(current.getDate() + 7);
      }
    }
    // Cantidad de veces que se ejecutará la tarea para ser completada
    this.task.task_repetitions = this.datesSchedule.length;

    //invoca el guardado de las notificaciones.
    this.saveNotifications();
  }

  /**
   * invoca la generacion de notficaciones locales o envía el guardar de la tarea en base de datos
   * @param dateScheduleIntex
   */
  saveNotifications() {
    if (this.datesSchedule.length === 0) {
      // si no se generan fechas para la trea programada no se guarda
      this.generalFunctions.showAlert('Atención', 'La fecha límite debe ser mayor para asignar recordatorios');
      return true;
    }
    this.task.task_limit_date = this.generalFunctions.task_limit_date;
    if (this.navParams.data.task_id) {
      this.editTask();
    } else {
      this.saveTask();
    }
  }

  /**
   * reproduce el sonido del tono seleccionado
   * @param tone
   */
  playTone(tone) {
    // direccion local de archivos multimeida
    this.stopTone();
    this.mediaFile = this.media.create(this.generalFunctions.localUri + "www/" + this.generalFunctions.arrayTones[tone]);
    this.mediaFile.play();
  }

  /**
   * para el sonido del tono
   */
  stopTone() {
    console.log('parar tono', this.task);
    if (this.mediaFile) {
      this.mediaFile.stop();
    }
  }

  /**
   * guarda la tarea en base de datos.
   */
  saveTask() {
    this.databaseProvider.newTask(this.task)
      .then(data => {
        if (data.insertId > 0) {
          this.saveNewSchedule(data.insertId, 0);
        }
      });
  }

  editTask() {
    this.databaseProvider.editTask(this.task)
      .then(data => {
        if (data.rowsAffected > 0) {
          console.log(data);
          this.clearNotifications(0);
        }
      });
  }

  saveNewSchedule(taskId, dateScheduleIntex) {
    if (this.datesSchedule.hasOwnProperty(dateScheduleIntex)) {
      this.databaseProvider.saveSchedule(taskId).then(dataSchedule => {
        // Schedule a single notification
        this.generalFunctions.setScheduleLocalNotification(dataSchedule.insertId, 'Alcanza tu objetivo',
          this.task.task_name, this.datesSchedule[dateScheduleIntex], this.task.task_tone);
        // se auto invoca la creación de la sigiente notificacion
        this.saveNewSchedule(taskId, dateScheduleIntex + 1);
      });
    } else {
      // al finalizar de recorrer las notificaciones se va a la pagina de avanzar
      this.navCtrl.push(AdvancePage);
    }
  }

  clearNotifications(indexNotification) {
    if (this.schedules.hasOwnProperty(indexNotification)) {
      this.generalFunctions.clearNotification(this.schedules[indexNotification].sche_id).then(data => {
        console.log('borrando notificacion, ', data);
        this.clearNotifications(indexNotification + 1);
      });
    } else {
      this.generalFunctions.getNotifications();
      this.saveNewSchedule(this.navParams.data.task_id, 0);
    }
  }
  presentProfileModal() {
    let profileModal = this.modalCtrl.create(CalendarComponent, { userId: 8675309 });
    profileModal.onDidDismiss(data => {
      console.log(data);
    });
    profileModal.present();
  }
}
