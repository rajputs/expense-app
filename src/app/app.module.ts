import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { NavComponent } from './common/nav/nav.component';
import { ExpenselistComponent } from './expense/expenselist/expenselist.component';
import { ExpensedataService } from './services/expensedata.service'
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AddexpenseComponent } from './expense/addexpense/addexpense.component'
 import { RouterModule } from '@angular/router'
 import { ChartModule } from 'angular2-chartjs';
 import {appRoutes} from './routes'
 import {ShowChartComponent} from './common/charts/showcharts-component'
 
 export const firebaseConfig={
   apiKey: "AIzaSyCD8HLADVitZWembveJWjxj_24E97ZaLKM",
    authDomain: "newtasks-9da2f.firebaseapp.com",
    databaseURL: "https://newtasks-9da2f.firebaseio.com",
    projectId: "newtasks-9da2f",
    storageBucket: "newtasks-9da2f.appspot.com",
    messagingSenderId: "927669646699"
 }


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ExpenselistComponent,
    ShowChartComponent,
    AddexpenseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
     AngularFireDatabaseModule,
     ChartModule
  ],
  providers: [ExpensedataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
