import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

declare var cordova;
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    platform.ready().then(() => {
      cordova.plugins.ForeSeeAPI.setDebugLogEnabled([true], function success(data) {
        console.log("debug enabled success: " + data)
      });
      
      // If the platform is iOS, you must start the SDK manually
      //Android is automatically started.
      if(platform.is("ios")) {
        cordova.plugins.ForeSeeAPI.start(function success(data) {
          console.log("start success: " + data)
        });
      }

      statusBar.styleLightContent();
      splashScreen.hide();
    });
  }
}

