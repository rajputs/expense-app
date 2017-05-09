import { Injectable } from '@angular/core';
import {AngularFireDatabase,FirebaseListObservable,FirebaseObjectObservable} from 'angularfire2/database'
import {Observable} from 'Rxjs/Rx'
import 'rxjs/Rx';
@Injectable() 
export class ExpensedataService {
expenselist$:FirebaseListObservable<any>
//
  constructor(private afbd:AngularFireDatabase) { 
console.log("ExpensedataService---> constructor()")
     this.expenselist$=this.afbd.list("/expenses")//,{ preserveSnapshot: true })
     console.log(this.expenselist$)

  }

returnExpenseList(){
  console.log("ExpensedataService---> returnExpenseList()")
  return this.expenselist$
}

returnExpenseListAsAggregate(){
  console.log("ExpensedataService---> returnExpenseListAsAggregate()")
  let s= this.expenselist$
  return s.flatMap(expenses=>expenses).map(expenses=>expenses)
  // as FirebaseObjectObservable<any>
 // .flatmap(expense=>expense)
 //return  s.map(expenselist=>expenselist.filter(x=>true)).do(x=>console.log(x))
 .groupBy(expense=> expense['expensedate'])
 .flatMap(group=>group.reduce(this.handler,[{amount:0}]))//.do(console.log)
 
 
 
 // .flatMap(group=>group.reduce((acc, cur) => [...acc, cur], ["" + group.key]))//.do(x=>console.log(x))
  //.flatMap(group=>{
   // console.log(group)
   // return group})
 // .map(arr => ({'id': parseInt(arr[0]), 'values': arr.slice(1)})).do(console.log)
 //.flatMap(group=>group.reduce((acc,curr)=>this.handler(acc,curr))).do(console.log)
 
  
}

test(acc,cur){
console.log(cur)
return acc.concat([cur])
}


handler(acc,curr){
console.log("ExpensedataService--->handler()")
   acc.expensedate=curr.expensedate
   acc.category=curr.category
   acc.amount=acc.amount+curr.amount
   console.log("grouped",acc)
   return acc


}

addExpense(expense){
 return  this.expenselist$.push(expense)
}
}
