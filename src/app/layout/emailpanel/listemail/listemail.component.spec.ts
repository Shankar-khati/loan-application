import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListemailComponent } from './listemail.component';

describe('ListemailComponent', () => {
  let component: ListemailComponent;
  let fixture: ComponentFixture<ListemailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListemailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
