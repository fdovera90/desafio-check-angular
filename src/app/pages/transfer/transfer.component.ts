import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { DestinationAccount } from 'src/app/interfaces/destination-account.interface';
import { Error } from 'src/app/interfaces/error.interface';
import { TransferForm } from 'src/app/interfaces/transfer-form.interface';
import { AccountsService } from 'src/app/services/accounts.service';
import { TransfersService } from 'src/app/services/transfers.service';
import { Utils } from 'src/app/utils/utils';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent {
  public name = '';
  public transferForm: FormGroup;

  public placeholder: string = 'Ingrese Nombre del Destinatario';
  public keyword: string = 'name';
  public historyHeading: string = 'Recientemente seleccionado';

  
  public destinationAccounts: DestinationAccount[] = [];

  constructor(
    private fb: FormBuilder,
    private accountsService: AccountsService,
    private transfersService: TransfersService
  ) {
    this.transferForm = fb.group({
      destinationAccount: [{ value: '', disabled: false }, Validators.required],
      amount: [{ value: '', disabled: false }, Validators.required],
    });

    this.accountsService.getDestinationAccounts()
      .subscribe({
        next: ( { destinationAccounts } ) => {
          this.destinationAccounts = destinationAccounts;
          this.destinationAccounts.forEach( (account: any ) => {
            account.summary = `<b>Nombre: </b>${account.name} , <b>Banco: </b>${account.bank} , <b>Cuenta: </b>${account.accountType} ${account.accountNumber}`;
          }); 
        },
        error: ( err ) => Swal.fire('Error', err.error.msg, 'error')
      });
  }

  submitTransferForm( formDirective: FormGroupDirective ) {
    if (this.transferForm.valid) {

      const formData: TransferForm = {
        amount: this.transferForm.value.amount,
        destinationAccount: this.transferForm.value.destinationAccount._id
      }
      this.transfersService.saveTransfer(formData)
      .subscribe({
        next: () => {
          Swal.fire('Éxito!', 'Transferencia realizada correctamente', 'success').then((result) => {
            this.transferForm.reset();
            
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
  }

  invalidField( field: string ): boolean {
    if ( this.transferForm.get( field )!.invalid ) return true;
    return false;
  }

  validate( event: KeyboardEvent ): void {
    Utils.valideKey( event );
  }
}
