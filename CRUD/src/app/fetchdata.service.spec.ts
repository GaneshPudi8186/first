import { TestBed } from '@angular/core/testing';

import { FetchdataService } from './fetchdata.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

describe('FetchdataService', () => {
  let service: FetchdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
