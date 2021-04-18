import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-push-splice',
  templateUrl: './push-splice.component.html',
  styleUrls: ['./push-splice.component.css']
})
export class PushSpliceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
out:any='';
users:any=[];


addData(my:any){

var test=my.value;
console.log(test);
this.users.push({
  name:test
  })
  this.out=console.log((this.users));

}



}