import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { ContactService } from './contact.service';

describe('Contact Service', () => {
  beforeEachProviders(() => [ContactService]);

  it('should ...',
      inject([ContactService], (service: ContactService) => {
    expect(service).toBeTruthy();
  }));
});
