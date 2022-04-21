import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './history/history.component';
import { NewDestinationAccountComponent } from './new-destination-account/new-destination-account.component';
import { TransferComponent } from './transfer/transfer.component';
import { AppMaterialModule } from '../app.material-module';
import { ReactiveFormsModule  } from '@angular/forms';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HistoryComponent,
    NewDestinationAccountComponent,
    TransferComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    ReactiveFormsModule,
    AutocompleteLibModule
  ],
  exports: [
    HistoryComponent,
    NewDestinationAccountComponent,
    TransferComponent
  ]
})
export class PagesModule { }
