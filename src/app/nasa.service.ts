import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Apod } from './apod';

@Injectable({
  providedIn: 'root'
})
export class NasaService {
 dates: String[] =[]
  constructor(private http: HttpClient) { }


  getApod(date: String): Observable<any> {
    return this.http.get<Apod>(`${environment.API_URL}${date}`);
    const res: Apod = {
      title: 'test',
      date: 'test',
      explanation: 'explanation',
      url: 'url'
    }
    return of(res);
  }

  updateDates(datesArray: String[]): void {
    this.dates = [...datesArray];
  }
}
