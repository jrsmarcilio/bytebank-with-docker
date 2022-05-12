import { Component, OnInit } from '@angular/core';
import { IDataTransfer } from '../interfaces/transfer.interface';
import { TransferService } from '../services/transfer.service';


@Component({
  selector: 'app-new-extract',
  templateUrl: './new-extract.component.html',
  styleUrls: ['./new-extract.component.scss'],
})
export class NewExtractComponent implements OnInit {
  dataTransfer: IDataTransfer[] = [];

  constructor(private service: TransferService) {}

  ngOnInit(): void {
    this.service.allTransfers().subscribe((transfers: IDataTransfer[]) => (this.dataTransfer = transfers));
  }

}
