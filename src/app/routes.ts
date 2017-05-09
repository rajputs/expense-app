import { Routes } from '@angular/router'
import {AddexpenseComponent} from './expense/addexpense/addexpense.component'
import {ExpenselistComponent} from './expense/expenselist/expenselist.component'
import {ShowChartComponent} from './common/charts/showcharts-component'

export const appRoutes: Routes = [
    { path: 'expenses', component: ExpenselistComponent},
    { path: 'expenses/add', component: AddexpenseComponent},
    { path: 'expenses/show', component: ShowChartComponent},


    { path: '', redirectTo: 'expenses', pathMatch: 'full' }]