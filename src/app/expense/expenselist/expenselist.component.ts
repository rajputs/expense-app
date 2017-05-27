import { Component, OnInit, OnDestroy } from '@angular/core';
import { ExpensedataService } from '../../services/expensedata.service'
import 'rxjs/Rx'

@Component({
  selector: 'app-expenselist',
  template: `
  <div class="container" >
<div *ngFor="let expense of expenselist"  class="panel panel-default" >
  
  <app-transheader [header]="expense"></app-transheader>
 
</div>
</div>



`

})
export class ExpenselistComponent implements OnInit, OnDestroy {
  expenselist
  subscription: any
  aggregate:any
  today:any= new Date().getTime()
   timefactor=1000*60*60*24
  constructor(private expenseService: ExpensedataService) { }

 /* ngOnInit() {
    console.log("ExpenselistComponent---> ngOnInit()")
    this.subscription = this.expenseService.returnExpenseList().subscribe(expenses =>{
      this.expenselist = expenses.sort((a,b)=> {
        return  new Date(b.expensedate).getTime()-new Date(a.expensedate).getTime()
       
         
      })
      
})
    
  
    //this.subscription=this.expenseService.returnExpenseListAsAggregate().subscribe((cumexp)=>this.handleGroups(cumexp))
  }*/
  ngOnInit(){
    this.subscription=this.expenseService.returnExpenseList().do(console.log).map(expense=>Object.keys(expense).map(item=>expense[item])).do(cumexp=>console.log("actual:",cumexp)).subscribe(expenses=>
    {this.expenselist=expenses.sort((a,b)=>{
      return new Date(b.$key).getTime()-new Date(a.$key).getTime() }


    )
    
  


})
    //subscribe(cumexp=>console.log("actual:",cumexp),error=>console.log("error:",error),()=>console.log("COMPLETED"))

     console.log("ExpenselistComponent--->leaving ngOnInit()")
  }


  ngOnDestroy() {
    console.log("ExpenselistComponent--->ngOnDestroy()")
    this.subscription.unsubscribe()
  }


}
