import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
const headerOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
export class AlquranService {
  // private apiUrl = 'http://localhost:5000/tasks';
  // constructor(private http: HttpClient) {}
  // getTasks(): Observable<Task[]> {
  //   return this.http.get<Task[]>(this.apiUrl);
  // }
}
