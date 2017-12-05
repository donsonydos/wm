import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {SQLitePorter} from "@ionic-native/sqlite-porter";
import {SQLite, SQLiteObject} from "@ionic-native/sqlite";
import {Platform} from "ionic-angular";
import 'rxjs/add/operator/map';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Storage} from '@ionic/storage';
import {File} from "@ionic-native/file";

@Injectable()
export class DataBaseProvider {
  database: SQLiteObject;
  private databaseReady: BehaviorSubject<boolean>;

  constructor(public http: HttpClient, public sqlitePorter: SQLitePorter, private storage: Storage,
              private sqlite: SQLite, private platform: Platform, private file: File) {
    this.databaseReady = new BehaviorSubject(false);
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'winMaker.db',
        location: 'default'
      })
        .then((db: SQLiteObject) => {
          this.database = db;
          this.storage.get('database_filled').then(val => {
            /**
             * si ya existe la base de datos continua de lo contrario la crea
             */
            if (val) {
              this.databaseReady.next(true);
            } else {
              this.fillDatabase();
            }
          });
        });
    });
  }

  /**
   * realiza la carga inicial de la base de datos
   */
  fillDatabase() {
    this.file.readAsText('file:///android_asset/www','assets/winMaker.txt').then(sql => {
      this.sqlitePorter.importSqlToDb(this.database, sql)
        .then(() => {
          this.databaseReady.next(true);
          this.storage.set('database_filled', true);
        })
        .catch(e => console.error(e));
    });
  }

  /**
   * obtiene el estado de la base de datos.
   * @returns {Observable<T>}
   */
  getDatabaseState() {
    return this.databaseReady.asObservable();
  }

  executeQuery(sql,data) {
    return this.database.executeSql(sql, data).then(data => {
      return data;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  }

  /**
   * inserta los nuevos registros en la tabla task
   * @param insertData
   * @returns {Promise<TResult>|Promise<TResult|any>|Promise<TResult2|TResult1>|Promise<any>}
   */
  newTask(insertData) {
    let sql = "INSERT INTO task(task_id,task_name,task_intensity,task_frequency,task_days,task_schedule,task_tone,task_reward,task_limit_date,task_repetitions,task_notification_id) VALUES (NULL,?,?,?,?,?,?,?,?,?,?)";
    let data = [
      insertData.task_name,
      insertData.task_intensity,
      insertData.task_frequency,
      insertData.task_days,
      insertData.task_schedule,
      insertData.task_tone,
      insertData.task_reward,
      insertData.task_limit_date,
      insertData.task_repetitions,
      insertData.task_notification_id
    ];
    return this.executeQuery(sql,data);
  }

  taskList(typeList) {
    let sql = "SELECT task_id,task_name,task_intensity,task_frequency,task_days,task_schedule,task_tone,task_reward,task_progress,task_limit_date,task_repetitions,task_repetitions_done FROM task ";
    if (typeList === 'inProgress') {
      sql += " where task_progress < 1";
    } else {
      sql += " where task_progress = 1";
    }
    return this.database.executeSql(sql, []).then((data) => {
      let list = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          list.push({
            task_id:                data.rows.item(i).task_id,
            task_name:              data.rows.item(i).task_name,
            task_intensity:         data.rows.item(i).task_intensity,
            task_frequency:         data.rows.item(i).task_frequency,
            task_days:              data.rows.item(i).task_days,
            task_schedule:          data.rows.item(i).task_schedule,
            task_tone:              data.rows.item(i).task_tone,
            task_reward:            data.rows.item(i).task_reward,
            task_progress:          data.rows.item(i).task_progress,
            task_limit_date:        data.rows.item(i).task_limit_date,
            task_repetitions:       data.rows.item(i).task_repetitions,
            task_repetitions_done:  data.rows.item(i).task_repetitions_done,
            task_notification_id:   data.rows.item(i).task_notification_id
          });
        }
      }
      return list;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }

  updateTask(task) {
    let sql = 'UPDATE task SET task_name=?, task_intensity=?, task_frequency=?, task_days=?, task_schedule=?,' +
      'task_tone=?, task_reward=?, task_progress=?, task_limit_date=?, task_repetitions=?, task_repetitions_done=?, ' +
      'task_notification_id=? WHERE task_id=?';
    let data = [task.task_name,task.task_intensity,task.task_frequency,task.task_days,task.task_schedule,
      task.task_tone,task.task_reward,task.task_progress,task.task_limit_date,task.task_repetitions,
      task.task_repetitions_done, task.task_notification_id, task.task_id];
    return this.executeQuery(sql,data);
  }

  deleteTask(taskId){
    let sql = "DELETE FROM task WHERE task_id = ?";
    let data = [taskId];
    return this.executeQuery(sql,data);
  }

  getGeneralProgress() {
    let sql = "SELECT COUNT(task_id) AS records, SUM(task_progress) AS progress FROM task";
    return this.database.executeSql(sql, []).then((data) => {
      let response = {
        progress: data.rows.item(0).progress / data.rows.item(0).records
      };
      return response;
    });
  }

}
