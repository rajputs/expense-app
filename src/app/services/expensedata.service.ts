import { Injectable } from '@angular/core';
import {AngularFireDatabase,FirebaseListObservable,FirebaseObjectObservable} from 'angularfire2/database'
import {Observable} from 'rxjs/Observable'
import {Subject} from 'rxjs/Subject'
import 'rxjs/Rx'
@Injectable() 
export class ExpensedataService {
expenselist$:FirebaseListObservable<any>
expenselistsummary$:FirebaseListObservable<any>
expense$
summary$:FirebaseListObservable<any>

//
  constructor(private afbd:AngularFireDatabase) { 
console.log("ExpensedataService---> constructor()")
     this.expenselist$=this.afbd.list("/expenses")

     this.expense$=this.afbd.object("/expenses")
      this.summary$=this.afbd.list("/expenseslist")
     /*,{
     
  query:{
    limitToLast:5
  }

     })//,{ preserveSnapshot: true })*/
      this.expenselistsummary$=this.afbd.list("/expenseslist")
     console.log(this.expenselist$)

  }

returnExpenseList(){
  console.log("ExpensedataService---> returnExpenseList()")
  //return this.expenselist$
   return this.summary$
}

returnExpenseListAsAggregate(){
  const src$=new Subject()
  console.log("ExpensedataService---> returnExpenseListAsAggregate()")
  let s= this.expenselist$
 //s.flatMap(expenses=>expenses).map(expenses=>expenses)
   return s.flatMap(expenses=>expenses).groupBy(expense=> expense['expensedate']).flatMap(group=>group.reduce(this.handler1, ["" + group.key]))//.switchMap(result=>result)
  //.do(x=>console.log(x))

 // .takeUntil(src$.onComplete())

  // .map(arr => console.log("arr:",arr))
 // .map(arr => ({ 'expensedate': arr[0], 'transactions': arr.slice(1) }))
  //  .do(y=>console.log(y))
    //.subscribe(x=>console.log(x))

 
  
}




handler1(acc,curr){
console.log("ExpensedataService--->handler()")
  
  return acc.concat(curr)
 
  //return  acc

  


}

addExpense(expense){
  //let key = angularFire.database.list('').push(undefined).key;
  /*let obj = { some: 'object' };
angularFire.database.object('').update({
    [`a/path/${key}`]: obj,
    [`another/path${key}`]: obj
});*/
//let updatedObject={}
let expensedate=expense.expensedate
 let expenseKey=this.expenselist$.push(undefined).key
 console.log("obj:",expenseKey)

 console.log("expense:",expense)
 this.expenselist$.update(expenseKey,expense)
//this.expenselist$.push()
const datelist=this.afbd.object("/expenseslist/"+expensedate+"/"+expenseKey)
datelist.set(expense)

}
}
