import { Component, OnInit, OnDestroy } from '@angular/core';
import { ExpensedataService } from '../../services/expensedata.service'

@Component({
  selector: 'app-expenselist',
  template: `
<div *ngFor="let expense of expenselist"  class="panel panel-default mid-pos" >
  <div class="panel-heading"><span class="ht">{{expense?.expensedate| date:'mediumDate'}}</span> 
   <span class="ht pull-right">{{getDaysFromNow(expense?.expensedate)}}</span>
  </div>
  <div  class="panel-body"> {{expense?.desc}}
      <span class="ht1 pull-right">{{expense?.amount|currency:'AUD':true}}</span>
  </div>
 
</div>



`,
  styles: [`.ht{font-size:12px;
    font-weight:bold;
}
.mid-pos{max-width:540px;
  
margin-left:auto;
margin-right:auto},
ht1{font:size:10px;
}
`
]
})
export class ExpenselistComponent implements OnInit, OnDestroy {
  expenselist
  subscription: any
  aggregate:any
  today:any= new Date().getTime()
   timefactor=1000*60*60*24
  constructor(private expenseService: ExpensedataService) { }

  ngOnInit() {
    console.log("ExpenselistComponent---> ngOnInit()")
    this.subscription = this.expenseService.returnExpenseList().subscribe(expenses =>{
      this.expenselist = expenses.sort((a,b)=> {
        return  new Date(b.expensedate).getTime()-new Date(a.expensedate).getTime()
       
         
      })
      
})
    
  
    //this.subscription=this.expenseService.returnExpenseListAsAggregate().subscribe((cumexp)=>this.handleGroups(cumexp))
  }
  /*ngOnInit(){
  //  this.subscription=this.expenseService.returnExpenseListAsAggregate().subscribe(cumexp=>console.log("actual",cumexp))
this.subscription = this.expenseService.returnExpenseList()
    .subscribe(snapshots => {
    snapshots.forEach(snapshot => {
      console.log(snapshot.key)
      console.log(snapshot.val())
    });
  })
     console.log("ExpenselistComponent--->leaving ngOnInit()")
  }*/


  ngOnDestroy() {
    console.log("ExpenselistComponent--->ngOnDestroy()")
    this.subscription.unsubscribe()
  }
  
  getDaysFromNow(datestring){
    const diff=Math.round((this.today-new Date(datestring).getTime())/this.timefactor)
     if (diff===0)
     return "Today"
     else
     return diff+" days"
  }


}
