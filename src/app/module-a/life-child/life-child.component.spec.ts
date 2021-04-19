import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeChildComponent } from './life-child.component';

describe('LifeChildComponent', () => {
  let component: LifeChildComponent;
  let fixture: ComponentFixture<LifeChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
