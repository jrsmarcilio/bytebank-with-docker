import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { IDataTransfer } from '../interfaces/transfer.interface';
import { TransferService } from '../services/transfer.service';

@Component({
  selector: 'app-new-extract',
  templateUrl: './new-extract.component.html',
  styleUrls: ['./new-extract.component.scss'],
})
export class NewExtractComponent implements OnInit {
  dataTransfer: IDataTransfer[] = [];
  status: string;

  constructor(private service: TransferService, private router: Router) {}

  ngOnInit(): void {
    this.fetchTranfer();
    this.changeEdit;
    this.changeDelete;
  }

  fetchTranfer() {
    this.service
      .allTransfers()
      .pipe(first())
      .subscribe(
        (transfers: IDataTransfer[]) => (this.dataTransfer = transfers)
      );
  }

  changeEdit(event: any) {
    this.router.navigateByUrl(`/edit/${event}`);
  }

  changeDelete(event: any) {
    this.service.deleteById(event).subscribe(() => this.fetchTranfer());
  }
}
