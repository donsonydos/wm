import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { IonicPage, NavController } from 'ionic-angular';
import {GeneralFunctionsProvider} from "../../providers/general-functions/general-functions";
import {AdvanceGoalPage} from "../advance-goal/advance-goal";
import {DataBaseProvider} from "../../providers/data-base/data-base";
import {CreatePage} from "../create/create";
import {GoalAccomplishPage} from "../goal-accomplish/goal-accomplish";

/**
 * Generated class for the AdvancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-advance',
  templateUrl: 'advance.html',
})
export class AdvancePage {

  taskList:any;

  decimals = new DecimalPipe("pipe");
  constructor(public navCtrl: NavController, public generalFunctions: GeneralFunctionsProvider,
              public databaseProvider: DataBaseProvider) {
  }

  ionViewDidEnter() {
    this.loadTaskList();
  }

  loadTaskList() {
    this.databaseProvider.taskList('inProgress').then(data=>{
      this.taskList = data;
    });
  }

  advanceTask(task) {
    console.info('updating task');
    task.task_repetitions_done = Number(task.task_repetitions_done) + 1;
    task.task_progress = task.task_repetitions_done / task.task_repetitions;
    this.databaseProvider.updateTask(task).then(data=>{
      console.log('actualiza tarea', data);
      if (task.task_repetitions_done === Number(task.task_repetitions)) {
        //ir a ventana de trofeo
        this.navCtrl.push(GoalAccomplishPage, {task:task});
      } else {
        this.navCtrl.push(AdvanceGoalPage, {task:task});
      }
    });
  }

  goCreate() {
    this.navCtrl.push(CreatePage);
  }

  editTask(task) {
    this.navCtrl.push(CreatePage,task);
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

}
