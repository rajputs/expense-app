import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-transheader',
  template:`
  
  <div class="panel-heading"><span class="ht">{{header?.$key| date:'mediumDate'}}</span> 
   <span class="ht pull-right">{{getDaysFromNow(header?.$key)}}</span>
  </div>
   <div  class="panel-body"  >
   <app-trans [transactions]="getArray()"></app-trans>
  </div>
  
  
  `,
    styles: [`.ht{font-size:14px;
    font-weight:bold;
}
.mid-pos{max-width:400px;
  
margin-left:auto;
margin-right:auto},
ht1{font:size:10px;
}
`
]
  
})
export class TransheaderComponent implements OnInit {



  constructor() { }

   today:any= new Date().getTime()
    timefactor=1000*60*60*24
@Input() header:any
  ngOnInit() {
    console.log(this.header)
  }
  
  getDaysFromNow(datestring){
    const diff=Math.round((this.today-new Date(datestring).getTime())/this.timefactor)
     if (diff===0)
     return "Today"
     else
     return diff+" days"
  }
  getArray(){
     return  Object.keys(this.header).map(item=>this.header[item])
  }

}
