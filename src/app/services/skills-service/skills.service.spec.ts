import { TestBed } from '@angular/core/testing';

import { SkillsService } from './skills.service';

describe('SkillService', () => {
  let service: SkillsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillsService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});