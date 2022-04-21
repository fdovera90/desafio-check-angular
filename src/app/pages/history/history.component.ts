import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Transfer } from 'src/app/models/transfer.model';
import { TransfersService } from 'src/app/services/transfers.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements AfterViewInit {

  displayedColumns: string[] = ['name', 'rut', 'bank', 'accountType', 'amount'];
  dataSource = new MatTableDataSource<Transfer>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor( private transfersServices: TransfersService ) {
    this.getTransfers();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getTransfers() {
    this.transfersServices.getTransfers()
        .subscribe({
          next: ({ transfers }) => { this.dataSource.data = transfers },
          error: (e) => console.error(e)
        });
  }
}