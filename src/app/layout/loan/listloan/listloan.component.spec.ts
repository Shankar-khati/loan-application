import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListloanComponent } from './listloan.component';

describe('ListloanComponent', () => {
  let component: ListloanComponent;
  let fixture: ComponentFixture<ListloanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListloanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
