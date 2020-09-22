import { Component, Input, OnInit } from '@angular/core';
import { Apod } from '../apod';
import { NasaService } from '../nasa.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  apod: Apod = {
    title:'',
    url: '',
    explanation: '',
    date: ''
  };
  @Input() date: String
  constructor(private nasaService: NasaService) { }

  ngOnInit(): void {
    this.nasaService.getApod(this.date).subscribe(res_apod => {
      this.apod = JSON.parse(JSON.stringify(res_apod));
    }
    )

  }
}
