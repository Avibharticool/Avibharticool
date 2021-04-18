import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  users=[
    {
      id:'1',
      fname:'Sonu',
      lname:'Monu'

    },
    {
      id:'2',
      fname:'Sonu',
      lname:'Monu'

    },
    {
      id:'3',
      fname:'Sonu',
      lname:'Monu'

    },
  ]

}
