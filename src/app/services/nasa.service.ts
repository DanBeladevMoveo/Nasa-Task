import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Apod } from '../models/apod';

@Injectable({
  providedIn: 'root',
})
export class NasaService {
  dates: String[] = [];
  constructor(private http: HttpClient) {}

  getApod(date: String): Observable<any> {
    return this.http.get<Apod>(`${environment.API_URL}${date}`);
  }

  updateDates(datesArray: String[]): void {
    this.dates = [...datesArray];
  }
}
