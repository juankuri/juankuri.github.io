import { TestBed } from '@angular/core/testing';
import { CertificatesService } from './certificates.service';

describe('CertificateService', () => {
  let service: CertificatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CertificatesService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});