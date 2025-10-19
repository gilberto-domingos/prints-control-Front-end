import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/Student';
import { StudentHistory } from '../models/StudentHistory';

// import { environment } from '../../environments/environment';
// private apiUrl = environment.apiUrl + '/Students';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  //private apiUrl = 'https://meuappapi.azurewebsites.net/api/Student';

  private apiUrl = 'http://localhost:8080/api/Student';

  // private apiUrl = 'https://prints-control.onrender.com/api/Student';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl + '/All');
  }

  getHistory(): Observable<StudentHistory[]> {
    return this.http.get<StudentHistory[]>(`${this.apiUrl}/history`);
  }

  getById(id: number): Observable<Student> {
    return this.http.get<Student>(this.apiUrl + '/Details/' + id);
  }

  create(student: Student): Observable<Student> {
    return this.http.post<Student>(this.apiUrl + '/Create', student);
  }

  update(id: number, student: Student): Observable<Student> {
    return this.http.put<Student>(this.apiUrl + '/Update/' + id, student);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + '/Delete/' + id, { observe: 'response' });
  }
}
