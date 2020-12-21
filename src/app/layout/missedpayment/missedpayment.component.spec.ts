import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissedpaymentComponent } from './missedpayment.component';

describe('MissedpaymentComponent', () => {
  let component: MissedpaymentComponent;
  let fixture: ComponentFixture<MissedpaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissedpaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissedpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
