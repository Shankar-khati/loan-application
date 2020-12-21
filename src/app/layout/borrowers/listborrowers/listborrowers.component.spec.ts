import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListborrowersComponent } from './listborrowers.component';

describe('ListborrowersComponent', () => {
  let component: ListborrowersComponent;
  let fixture: ComponentFixture<ListborrowersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListborrowersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListborrowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
