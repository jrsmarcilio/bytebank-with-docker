import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDataTransfer } from '../interfaces/transfer.interface';
import { TransferService } from '../services/transfer.service';

@Component({
  selector: 'app-new-extract',
  templateUrl: './new-extract.component.html',
  styleUrls: ['./new-extract.component.scss'],
})
export class NewExtractComponent implements OnInit {
  dataTransfer: IDataTransfer[] = [];

  constructor(private service: TransferService, private router: Router) {}

  ngOnInit(): void {
    this.service
      .allTransfers()
      .subscribe(
        (transfers: IDataTransfer[]) => (this.dataTransfer = transfers)
      );
      this.changeEdit;
  }

  changeEdit(event: any) {
    this.router.navigate([`/edit/${event}`], { fragment: 'top' });
  }
}
