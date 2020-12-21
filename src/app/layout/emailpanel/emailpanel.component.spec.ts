import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailpanelComponent } from './emailpanel.component';

describe('EmailpanelComponent', () => {
  let component: EmailpanelComponent;
  let fixture: ComponentFixture<EmailpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
