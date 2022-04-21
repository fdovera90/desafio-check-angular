import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './404/not-found.component';
import { HistoryComponent } from './pages/history/history.component';
import { HomeComponent } from './pages/home/home.component';
import { NewDestinationAccountComponent } from './pages/new-destination-account/new-destination-account.component';
import { TransferComponent } from './pages/transfer/transfer.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nuevo-destinatario', component: NewDestinationAccountComponent },
  { path: 'transferir', component: TransferComponent },
  { path: 'historial', component: HistoryComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }