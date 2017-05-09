import { Component, OnInit } from '@angular/core';
import {RouterLink,Router} from '@angular/router'
import {ExpensedataService} from '../../services/expensedata.service'
import {Observable} from 'Rxjs/Rx'
import 'rxjs/Rx';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styles:[`.large-text{
    font-size:20px;
    font-weight:bold;
  }`]
 
})
export class NavComponent implements OnInit {
 currentDate:Date= new Date()
  constructor(private expenseService:ExpensedataService, private router :Router) { }
 aggregate:any
 interim:any
  ngOnInit() {
    if (this.expenseService.expenselist$){
      console.log("inside ngoninit of nav.ts")
       this.expenseService.expenselist$.subscribe(
     // this.expenseService.expenselist$.filter(expense=>expense.expensedate.getMonth()===new Date().getMonth()).subscribe(
     //   expenses=>this.aggregate=expenses.reduce((agg,cur)=>agg+cur)
     
      result=>{
      this.aggregate= result.filter(expense=>new Date(expense.expensedate).getMonth()===new Date().getMonth())
       
      .reduce(this.getAggregate,{amount:0}).amount
        console.log('values:',this.aggregate)}
      )
    }
  }

  getAggregate(agg,cur){
      agg.amount=agg.amount+cur.amount*1
      console.log(agg.amount)
        return agg
  }

}
