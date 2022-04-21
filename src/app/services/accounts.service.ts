import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DestinationAccountForm } from '../interfaces/destination-account-form.interface';
import { DestinationAccount } from '../interfaces/destination-account.interface';

interface DestAccounts {
  destinationAccounts: DestinationAccount[];
}

interface DestAccount {
  destinationAccountDB: DestinationAccount;
}

const url: string = `${ environment.base_url }/destinationAccount`;

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor( private http: HttpClient ) { }

  saveDestinationAccount( formData: DestinationAccountForm ): Observable<DestAccount> {
    return this.http.post<DestAccount>( url, formData);
  }

  getDestinationAccounts(): Observable<DestAccounts> {
    return this.http.get<DestAccounts>( url );
  }
}
