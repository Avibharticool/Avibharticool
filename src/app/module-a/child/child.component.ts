import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 @Input() head1:boolean=true;
 @Input() head2:boolean=false;
 @Input() product_name:string="";




}
