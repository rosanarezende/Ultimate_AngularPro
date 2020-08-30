import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { Store } from 'store';

// feature modules

// containers
import { AppComponent } from './containers/app/app.component';

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    Store
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

/*
var firebaseConfig = {
    apiKey: "AIzaSyDTmASCjOj7M9iJ0dVkOlIogEDGSPvJ1Z8",
    authDomain: "fitness-app-60d13.firebaseapp.com",
    databaseURL: "https://fitness-app-60d13.firebaseio.com",
    projectId: "fitness-app-60d13",
    storageBucket: "fitness-app-60d13.appspot.com",
    messagingSenderId: "854601065317",
    appId: "1:854601065317:web:d682972f1884c237fbb78c",
    measurementId: "G-XS0CQZ2YVE"
  };
*/
