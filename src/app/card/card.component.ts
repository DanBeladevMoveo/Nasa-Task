import { Component, Input, OnInit } from '@angular/core';
import { title } from 'process';
import { catchError, map } from 'rxjs/operators';
import { Apod } from '../apod';
import { NasaService } from '../services/nasa.service';
import { ErrorsService } from '../services/errors.service';
import { SpinnerService } from '../services/spinner.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  apod: Apod = {
    title: '',
    url: '',
    explanation: '',
    date: ''
  };
  @Input() date: String
  constructor(private nasaService: NasaService, private spinner: SpinnerService, private errorsService: ErrorsService) { }

  ngOnInit(): void {
    this.spinner.requestStarted();
    this.nasaService.getApod(this.date).
      pipe(
        map((res: Apod) => { return { date: res.date, title: res.title, url: res.url, explanation: res.explanation } }),
        catchError(this.errorsService.handleError<Apod>('getApod', {} as Apod)),
      ).
      subscribe(res_apod => {
        this.apod = JSON.parse(JSON.stringify(res_apod));
        this.spinner.requestEnded();
      }
        )
  }
}
