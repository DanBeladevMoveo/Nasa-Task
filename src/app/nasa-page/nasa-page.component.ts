import { Component, OnInit } from '@angular/core';
import { NasaService } from '../services/nasa.service';

@Component({
  selector: 'app-nasa-page',
  templateUrl: './nasa-page.component.html',
  styleUrls: ['./nasa-page.component.scss']
})
export class NasaPageComponent implements OnInit {

  constructor(public nasaService: NasaService) { }

  ngOnInit(): void {
  }

}
