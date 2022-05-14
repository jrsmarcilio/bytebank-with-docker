import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { IDataTransfer } from '../interfaces/transfer.interface';

@Injectable({
  providedIn: 'root',
})
export class TransferService {
  private listTransfers: IDataTransfer[];
  private url: string = `http://${environment.backendBaseUrl}:${environment.backendBasePort}/transfer`;

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
    return this.httpClient.post<IDataTransfer>(this.url, data);
  }

  updateTransfer(id: number, data: IDataTransfer): Observable<IDataTransfer> {
    const url: string = `${this.url}/${id}`
    return this.httpClient.put<IDataTransfer>(url, data)
  }

  getById(id: number): Observable<IDataTransfer> {
    const url: string = `${this.url}/${id}`;
    return this.httpClient.get<IDataTransfer>(url);
  }

  deleteById(id: number): Observable<IDataTransfer> {
    const url: string = `${this.url}/${id}`;
    return this.httpClient.delete<IDataTransfer>(url);
  }
}
