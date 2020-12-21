import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawmoneyComponent } from './withdrawmoney.component';

describe('WithdrawmoneyComponent', () => {
  let component: WithdrawmoneyComponent;
  let fixture: ComponentFixture<WithdrawmoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithdrawmoneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawmoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
