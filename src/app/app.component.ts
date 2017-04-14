import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import database from 'firebase';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  firebaseApp(){
    const conf={
      apiKey: "AIzaSyAkk33nqXIgdRdc27cPQI8vtFTFs3ulxpk",
      authDomain: "estoque-8f063.firebaseapp.com",
      databaseURL: "https://estoque-8f063.firebaseio.com",
      storageBucket: "estoque-8f063.appspot.com",
      messagingSenderId: "892187054595"
    };
    database.initializeApp(conf);
  }

  constructor(public platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.firebaseApp();      
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

}
