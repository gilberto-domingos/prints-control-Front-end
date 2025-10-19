import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PrintJob } from '../models/PrintJob';

@Injectable({
  providedIn: 'root',
})
export class PrintJobService {
  private apiUrl = 'http://localhost:8080/api/PrintJob';

  constructor(private http: HttpClient) {}

  getAll(): Observable<PrintJob[]> {
    return this.http.get<PrintJob[]>(this.apiUrl + '/All');
  }

  printDocuments(printJob: PrintJob): Observable<PrintJob> {
    return this.http.post<PrintJob>(this.apiUrl + '/print', printJob);
  }

  getPrintDocuments(): Observable<PrintJob[]> {
    return this.http.get<PrintJob[]>(this.apiUrl + '/Print');
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + '/Delete/' + id, { observe: 'response' });
  }
}
