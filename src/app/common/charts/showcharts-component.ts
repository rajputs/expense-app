import {Component,OnInit} from "@angular/core"
import {ExpensedataService} from '../../services/expensedata.service'
@Component({
template:`<chart [type]="type" *ngIf="isDataAvailable" [data]="data" [options]="options"></chart>`

})

export class ShowChartComponent implements OnInit {
month:number=new Date().getMonth()
isDataAvailable:boolean=false
monthShortNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
]

DAYS=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26"
,"27","28","29","30","31"]
type = 'line';
tempdata
onemore:any[]
data = {
  labels: [],
  datasets: [
    {
      
    }
  ]
};
options = {
  responsive: true,
  maintainAspectRatio: false
};
constructor(private expenseService:ExpensedataService){

}

ngOnInit(){



console.log("after page load")
let pageReload=true
this.expenseService.expenselist$.subscribe(
 result=>{
     this.isDataAvailable=false
    this.tempdata= result.filter(this.filterExpense)//.amount)
    console.log(this.tempdata)
    const label= "chart for the month of "+this.monthShortNames[this.month] 
 
//this.data.datasets=[{label:label,data:data}]
this.data.labels= this.DAYS.slice(0,new Date().getDate()+4).map(x=>x+'/'+(this.month+1))
let temp=this.DAYS.slice(0,new Date().getDate()+1) //[1,2,3,4,5,6,7,8]
//console.log(temp)
this.data.datasets=[{label:label,data:temp.map(x=>this.search(x)).map(x=>x.amount)}].slice()
//if (pageReload===undefined)
 //this.data.datasets["data"].update()
//console.log(this.data.datasets)
this.isDataAvailable=true
console.log(pageReload)
 })
}

 daysInMonth() {
    const year=new Date().getFullYear()
    const month=new Date().getMonth()+1
  return new Date(year, month, 0).getDate();
}

filterExpense(expense){
return new Date(expense.expensedate).getMonth()===new Date().getMonth()
}
/*transform(record){

    //let day=new Date(record.expensedate).getDay()
    if (this.tempdata.indexOf(day)!=-1)
          this.tempdata[day]= this.tempdata[day]+record.amount
       
return {day:}
}*/

search(val)
{
   let sum={day: undefined ,amount:0}
    for (let i=0;i<this.tempdata.length;i++){
         let day=new Date((this.tempdata[i]["expensedate"])).getDate()
         //console.log("values",i,val,day,this.tempdata[i]["expensedate"])
         if (val==day){
             sum["day"]=val
             sum["amount"]= sum["amount"]+this.tempdata[i]["amount"]
               console.log("suminside",sum)
         }
    }
    //console.log("sum",sum)
   return sum
}
}