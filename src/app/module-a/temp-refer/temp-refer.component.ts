import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-refer',
  templateUrl: './temp-refer.component.html',
  styleUrls: ['./temp-refer.component.css']
})
export class TempReferComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  get(my: any){
    console.log(my.value);

  }
  

}
