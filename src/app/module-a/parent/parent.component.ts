import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cards:any=['Avi','Bharti','Kumar'];

  head1:boolean=true;
  head2:boolean=false;
  done:boolean=false;
  product_name!: string;

  addCart(pr:string){
    this.head1=false;
    this.head2=true;
    this.product_name=pr; 
  }
  check_box()
{
  this.done=true
}  


delete()
{
  this.done=false;
  this.head2=false;
  this.head1=true;
}
}
