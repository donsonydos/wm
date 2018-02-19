import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {CreatePage} from "../pages/create/create";
import {AdvancePage} from "../pages/advance/advance";
import {AccomplishmentPage} from "../pages/accomplishment/accomplishment";
import {PublicityComponent} from "../components/publicity/publicity";
import { GeneralFunctionsProvider } from '../providers/general-functions/general-functions';
import {AboutUsPage} from "../pages/about-us/about-us";
import {AdvanceGoalPage} from "../pages/advance-goal/advance-goal";
import {AdMobFree} from "@ionic-native/admob-free";
import { DataBaseProvider } from '../providers/data-base/data-base';
import {HttpClientModule} from "@angular/common/http";
import {SQLitePorter} from "@ionic-native/sqlite-porter";
import {SQLite} from "@ionic-native/sqlite";
import {IonicStorageModule} from "@ionic/storage";
import {File} from "@ionic-native/file";
import {LocalNotifications} from "@ionic-native/local-notifications";
import {Media} from "@ionic-native/media";
import {GoalAccomplishPage} from "../pages/goal-accomplish/goal-accomplish";
import { SentencesProvider } from '../providers/sentences/sentences';
import {SocialSharing} from "@ionic-native/social-sharing";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CreatePage,
    AdvancePage,
    AccomplishmentPage,
    AboutUsPage,
    AdvanceGoalPage,
    PublicityComponent,
    GoalAccomplishPage
  ],
  imports: [
    BrowserModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CreatePage,
    AdvancePage,
    AccomplishmentPage,
    AboutUsPage,
    AdvanceGoalPage,
    PublicityComponent,
    GoalAccomplishPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SQLite,
    SQLitePorter,
    GeneralFunctionsProvider,
    AdMobFree,
    File,
    DataBaseProvider,
    LocalNotifications,
    Media,
    SentencesProvider,
    SocialSharing
  ]
})
export class AppModule {}
