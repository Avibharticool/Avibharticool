import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectproduct!: string;
  getValue(val:any)
{
  console.log(val.target.value)
  this.selectproduct=val.target.value;

}

}
