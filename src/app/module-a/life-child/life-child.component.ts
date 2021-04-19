import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-child',
  templateUrl: './life-child.component.html',
  styleUrls: ['./life-child.component.css']
})
export class LifeChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, OnDestroy {

  constructor() {
    console.log("Constructor is calling");
  }
  @Input() val: any;



  ngOnInit(): void {
    console.log("ngOnInit is calling")
  }
  ngDoCheck(): void {
    console.log("DoCheck Is calling")

  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit is calling")
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContenChecked is calling")
  }

  ngAfterViewInit(): void {
    console.log(" ngAfterViewInit is calling")

  }
  ngAfterViewChecked(): void {
    console.log(" ngAfterViewChecked is calling")

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("OnChange is calling" + ":-" + changes.val.currentValue);
  }
  ngOnDestroy(): void {
    console.log("This is destroy");
    alert("Really do you leave the page");

  }




}
