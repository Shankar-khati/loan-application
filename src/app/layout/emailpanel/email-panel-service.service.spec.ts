import { TestBed } from '@angular/core/testing';

import { EmailPanelServiceService } from './email-panel-service.service';

describe('EmailPanelServiceService', () => {
  let service: EmailPanelServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailPanelServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
