import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bank } from '../interfaces/bank.interface';

interface Banks {
  banks: Bank[]
}
@Injectable({
  providedIn: 'root'
})
export class BanksService {

  private url = 'https://bast.dev/api/banks.php';

  constructor( private http: HttpClient ) { }

  getBanks(): Observable<Banks> {
    return this.http.get<Banks>( this.url );
  }

}
