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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CreatePage,
    AdvancePage,
    AccomplishmentPage,
    AboutUsPage,
    PublicityComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CreatePage,
    AdvancePage,
    AccomplishmentPage,
    AboutUsPage,
    PublicityComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GeneralFunctionsProvider
  ]
})
export class AppModule {}
