import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 
  nav:any= [
    {
        name: 'Home', icon: 'fa fa-table', routerLink: 'home'
    },
    {
        name: 'Card', icon: 'fa fa-graduation-cap', routerLink: 'card'
    },
    // {
    //     name: 'Instructors', icon: 'fa fa-user', routerLink: 'instructor'
    // },
    {
        name: 'Parent', icon: 'fa fa-address-card', routerLink: 'parent'
    },
    {
        name: 'Child', icon: 'fa fa-book', routerLink: 'child'
    },
    {
        name: 'ngCard', icon: 'fa fa-picture-o', routerLink: 'ngcard'
    },
    {
        name: 'ngIf', icon: 'fa fa-users', routerLink: 'ngif'
    },
    {
        name: 'ngFor', icon: 'fa fa-book', routerLink: 'ngfor'
    },
    {
        name: 'ngSwitch', icon: 'fa fa-book', routerLink: 'ngswitch'
    },
    {
        name: 'ngContent', icon: 'fa fa-book', routerLink: 'ngcontent'
    },
    // {
    //     name: 'Price tier', icon: 'fa fa-money', routerLink: 'tier'
    // },
    {
        name: 'Push-Splice', icon: 'fa fa-users', routerLink: 'pushsplice'
    },
  //   {
  //       name:'Component-A', icon:'fa fa-users', routerLink:'component-a'
  //   },
  //   {
  //     name:'Component-B', icon:'fa fa-users', routerLink:'component-b'
  // },
  
  {
    name:'Grandparent', icon:'fa fa-users', routerLink:'grandparent'
},
{
  name:'Property-Binding', icon:'fa fa-users', routerLink:'property-binding'
},
{
  name:'Template Reference', icon:'fa fa-users', routerLink:'temp-refer'
},
{
  name:'Event Binding', icon:'fa fa-users', routerLink:'event-binding'
},
{
  name:'ng Container', icon:'fa fa-users', routerLink:'ng-container'
},
{
  name:'Data Binding', icon:'fa fa-users', routerLink:'databinding'
},
]


}
