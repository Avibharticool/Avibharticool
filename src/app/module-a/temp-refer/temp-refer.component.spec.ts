import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempReferComponent } from './temp-refer.component';

describe('TempReferComponent', () => {
  let component: TempReferComponent;
  let fixture: ComponentFixture<TempReferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempReferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempReferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
