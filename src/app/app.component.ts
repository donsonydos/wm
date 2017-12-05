import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {AdMobFree, AdMobFreeBannerConfig} from "@ionic-native/admob-free";
import {DataBaseProvider} from "../providers/data-base/data-base";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, databaseProvider: DataBaseProvider,
              private adMobFree: AdMobFree) {
    this.startPublicity();
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleBlackOpaque();
      /**
       * inicializa la base de datos y carga las consultas iniciales
       */
      databaseProvider.getDatabaseState().subscribe(rdy => {
        if (rdy) {
          console.info('database ready');
        }
      });
      splashScreen.hide();
    });
  }

  startPublicity() {
    const bannerConfig: AdMobFreeBannerConfig = {
      // add your config here
      // for the sake of this example we will just use the test config
      isTesting: true,
      autoShow: true
    };
    this.adMobFree.banner.config(bannerConfig);

    this.adMobFree.banner.prepare()
      .then(() => {
        // banner Ad is ready
        // if we set autoShow to false, then we will need to call the show method here
      })
      .catch(e => console.log(e));
  }
}

