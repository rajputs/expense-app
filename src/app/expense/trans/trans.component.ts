import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-trans',
  template: `
    <div  class="panel-body" *ngFor="let transaction of transactions" ><span class="ht">{{transaction?.desc}}</span>
      <span class="ht pull-right">{{transaction?.amount|currency:'AUD':true}}</span>
  </div>
  `,
     styles: [`.ht{font-size:15px;
   
}

`
]
})
export class TransComponent implements OnInit {

  constructor() { }

@Input() transactions:any

  ngOnInit() {
  }

}
