import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Apod } from './apod';

@Injectable({
  providedIn: 'root'
})
export class NasaService {
 dates: String[] =[]
  constructor(private http: HttpClient) { }


  getApod(date: String): Observable<any> {
    return this.http.get<Apod>(`${environment.API_URL}${date}`).pipe(
      tap(_ => this.log('fetched nasa day details')),
        catchError(this.handleError<Apod>('getApod', {} as Apod))
    )
    const res: Apod = {
      title: 'test',
      date: 'test',
      explanation: 'explanation',
      url: 'url'
    }
    return of(res);
  }

  updateDates(datesArray: String[]): void {
    console.log(this.dates);
    console.log(datesArray);
    this.dates = [...datesArray];
    console.log(this.dates);
  }

   /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
       alert(`${operation} failed: ${error.error.msg}`);

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
    
    // this.messageService.add(`HeroService: ${message}`);
  }
}
