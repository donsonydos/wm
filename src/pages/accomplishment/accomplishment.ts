import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {GeneralFunctionsProvider} from "../../providers/general-functions/general-functions";
import {DataBaseProvider} from "../../providers/data-base/data-base";
import {AdvancePage} from "../advance/advance";

/**
 * Generated class for the AccomplishmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accomplishment',
  templateUrl: 'accomplishment.html',
})
export class AccomplishmentPage {

  taskList;
  constructor(public navCtrl: NavController, public generalFunctions: GeneralFunctionsProvider,
              private databaseProvider: DataBaseProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccomplishmentPage');
    this.loadTaskList();
  }

  loadTaskList() {
    this.databaseProvider.taskList('finished').then(data=>{
      this.taskList = data;
    });
  }

  confirmDeleteTask(taskId) {
    this.generalFunctions.confirm("Atención", "¿Eliminar tarea de forma definitiva?").then(response=>{
      if (response) {
        this.deleteTask(taskId);
      }
    });
  }

  deleteTask(taskId) {
    this.databaseProvider.deleteTask(taskId).then(data=>{
      if (data.rowsAffected > 0) {
        this.loadTaskList();
      }
    });
  }

  goAdvance() {
    this.navCtrl.push(AdvancePage);
  }

}
