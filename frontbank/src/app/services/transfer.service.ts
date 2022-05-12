import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IDataTransfer } from '../interfaces/transfer.interface';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TransferService {
  private listTransfers: IDataTransfer[];
  private url: string = `${environment.backendBaseUrl}:${environment.backendBasePort}/transfer`;

  constructor(private httpClient: HttpClient) {
    this.listTransfers = [];
  }

  get transfers() {
    return this.listTransfers;
  }

  allTransfers(): Observable<IDataTransfer[]> {
    return this.httpClient.get<IDataTransfer[]>(this.url);
  }

  newTransfer(data: IDataTransfer): Observable<IDataTransfer> {
    const transfer: IDataTransfer = data;
    return this.httpClient.post<IDataTransfer>(this.url, transfer);
  }

  updateTransfer(id: number, data: IDataTransfer): Observable<IDataTransfer> {
    const url: string = `${this.url}/${id}`
    return this.httpClient.post<IDataTransfer>(url, data)
  }

  getById(id: number): Observable<IDataTransfer> {
    const url: string = `${this.url}/edit/${id}`;
    return this.httpClient.get<IDataTransfer>(url);
  }
}
