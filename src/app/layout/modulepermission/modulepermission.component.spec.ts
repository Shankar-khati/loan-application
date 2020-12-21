import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulepermissionComponent } from './modulepermission.component';

describe('ModulepermissionComponent', () => {
  let component: ModulepermissionComponent;
  let fixture: ComponentFixture<ModulepermissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulepermissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulepermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
