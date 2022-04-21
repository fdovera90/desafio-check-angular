import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Transfer } from '../models/transfer.model';
import { TransferForm } from '../interfaces/transfer-form.interface';
import { Observable } from 'rxjs';

const url: string = `${ environment.base_url }/transfers`;

interface Transfers {
  transfers: Transfer[];
}

@Injectable({
  providedIn: 'root'
})
export class TransfersService {

  constructor( private http: HttpClient ) { }

  getTransfers(): Observable<Transfers> {
    return this.http.get<Transfers>( url );
  }
  
  saveTransfer( formData: TransferForm ): Observable<Transfer> {
    return this.http.post<Transfer>( url, formData)
  }
  
}
