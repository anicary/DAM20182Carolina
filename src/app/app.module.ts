import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { OtherPage } from "../pages/otherPage/otherPage";
import { UserPage } from "../pages/userPage/userPage";

import { ApiRest } from "../services/apirest";
import { PlacesRest } from "../services/placesrest";
import {DeportesRest} from "../services/deportesrest";

import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OtherPage,
    UserPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    OtherPage,
    UserPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ApiRest,
    PlacesRest,
    DeportesRest,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}