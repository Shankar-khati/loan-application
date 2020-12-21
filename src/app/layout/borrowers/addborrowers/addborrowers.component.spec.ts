import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddborrowersComponent } from './addborrowers.component';

describe('AddborrowersComponent', () => {
  let component: AddborrowersComponent;
  let fixture: ComponentFixture<AddborrowersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddborrowersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddborrowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
