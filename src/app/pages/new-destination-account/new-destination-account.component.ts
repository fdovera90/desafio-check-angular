import { Component } from '@angular/core';
import { FormBuilder, FormGroupDirective, Validators } from '@angular/forms';
import { formatRutValidator } from 'src/app/helpers/format-rut-validator';
import { Bank } from 'src/app/interfaces/bank.interface';
import { Error } from 'src/app/interfaces/error.interface';
import { AccountsService } from 'src/app/services/accounts.service';
import { BanksService } from 'src/app/services/banks.service';
import { Utils } from 'src/app/utils/utils';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-destination-account',
  templateUrl: './new-destination-account.component.html',
  styleUrls: ['./new-destination-account.component.css']
})
export class NewDestinationAccountComponent {

  public destinationAccountForm = this.fb.group({
    name: ['',Validators.required],
    rut: ['',[Validators.required, formatRutValidator()]],
    email: ['',Validators.pattern("[a-zA-Z0-9!#$%&'*_+-]([\.]?[a-zA-Z0-9!#$%&'*_+-])+@[a-zA-Z0-9]([^@&%$\/()=?¿!.,:;]|\d)+[a-zA-Z0-9][\.][a-zA-Z]{2,4}([\.][a-zA-Z]{2})?")],
    phone: ['',Validators.pattern('^[0-9]{9}$')],
    bank: ['',Validators.required],
    accountType: ['',Validators.required],
    accountNumber: ['',Validators.required],
  });

  public accountTypes = [
    { id: 1, name: 'Cuenta Corriente' },
    { id: 2, name: 'Cuenta Ahorro' },
    { id: 3, name: 'Cuenta Vista'}
  ];

  public banks:Bank[] = [];

  constructor( 
    private fb: FormBuilder,
    private accountsService: AccountsService,
    private banksService: BanksService
  ) { 

    this.banksService.getBanks()
    .subscribe({
      next: ({ banks }) => { this.banks = banks },
      error: ( err ) => Swal.fire('Error', err.error.msg, 'error')
    });

  }

  saveNewDestinationAccount( formDirective: FormGroupDirective ) {

    if( this.destinationAccountForm.invalid ) return;

    this.accountsService.saveDestinationAccount( this.destinationAccountForm.value )
        .subscribe({
          next: ({ destinationAccountDB }) => {
            Swal.fire({
              title: 'Éxito!',
              icon: 'success',
              html:
                'La nueva cuenta destinataria fue creada de manera exitosa.' + '<br/>' +
                '<div style="text-align: left">' + 
                '<b>RUT:</b> ' + destinationAccountDB.rut + '<br/>' +
                '<b>Nombre:</b> ' + destinationAccountDB.name + '<br/>' +
                (( destinationAccountDB.email !== "" ) ? ('<b>Correo:</b> ' + destinationAccountDB.email + '<br/>') : '' )+
                (( destinationAccountDB.phone !== null ) ? ('<b>Teléfono:</b> ' + destinationAccountDB.phone + '<br/>') : '' ) +
                '<b>Banco:</b> ' + destinationAccountDB.bank + '<br/>' +
                '<b>Tipo de Cuenta:</b> ' + destinationAccountDB.accountType + '<br/>' +
                '<b>N° de Cuenta:</b> ' + destinationAccountDB.accountNumber + '</div>',
              
            }).then((result) => {
              this.destinationAccountForm.reset();
              formDirective.resetForm();
            });
          },
          error: ( err ) => { 
            let msgError: string = '';
            err.error.errors.forEach( (error: Error) => {
              msgError = error.msg + '<br/>' + msgError;
            });
            Swal.fire('Error', msgError, 'error');

          }
        });
  }  

  invalidField( field: string ): boolean {
    if ( this.destinationAccountForm.get( field )!.invalid ) return true;
    return false;
  }

  validate(event: KeyboardEvent){
    Utils.valideKey( event );
  }
}
