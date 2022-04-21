import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { BanksService } from "./banks.service";

describe('BanksService', () => {
  let service: BanksService;
  let httpMock: HttpTestingController;

  beforeEach( () => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject( BanksService );
    httpMock = TestBed.get(HttpTestingController);
  });


  it('should create', () => {
    expect( service ).toBeTruthy();
  });

  it('should get a banks list', () => {
      let banksService: any = [];
      service.getBanks().subscribe({
          next: ({banks}) => expect( banks.length ).toBe(2)
      });
      const request = httpMock.expectOne('https://bast.dev/api/banks.php');
      expect( request.request.method ).toBe( 'GET' );
  });

});
