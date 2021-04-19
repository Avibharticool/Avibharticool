import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hook',
  templateUrl: './life-cycle-hook.component.html',
  styleUrls: ['./life-cycle-hook.component.css']
})
export class LifeCycleHookComponent implements OnInit  {

  constructor() {
   }
    
   

  ngOnInit(): void {
    console.log("ngOnInit is calling");
  }

  data:any;

  getval(val:any){

this.data=val.value;

  }



}
