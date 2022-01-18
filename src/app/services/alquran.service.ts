import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Surah } from '../Surah';
const headerOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class AlquranService {
  private apiUrl = 'http://api.alquran.cloud/v1';
  constructor(private http: HttpClient) {}
  getTasks(): Observable<Surah[]> {
    const url = `${this.apiUrl}/surah`;
    return this.http.get<Surah[]>(url);
  }
}
