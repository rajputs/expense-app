import { Component, OnInit } from '@angular/core';
import {ExpensedataService} from "../../services/expensedata.service"
import {Router} from "@angular/router"
import {FormsModule} from "@angular/forms"

@Component({
  selector: 'app-addexpense',
  templateUrl: './addexpense.component.html'
  
})
export class AddexpenseComponent implements OnInit {
 amount:string
  at:string
  category:string
  desc:string
  expensedate:Date
  whopaid:string
  constructor(private dataService:ExpensedataService, private router:Router) { }

  ngOnInit() {
  }



addExpense(formvalues){

let expense={
  amount:+(formvalues.amount),
  at:formvalues.at,
  category:formvalues.category,
  desc:formvalues.desc,
  expensedate:formvalues.expensedate,
  whopaid:formvalues.paidby
}
this.dataService.addExpense(expense)
this.router.navigate(['/expenses'])


}



}
