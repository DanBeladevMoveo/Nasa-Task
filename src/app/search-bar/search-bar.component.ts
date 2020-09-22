import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NasaService } from '../nasa.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  dates: String[]=[]
  search = new FormGroup(
    {
      // search: new FormControl(),
      toDate: new FormControl(),
      fromDate: new FormControl()
    }
  )
  constructor(private nasaService: NasaService) { }

  ngOnInit(): void {
    this.search = new FormGroup({
      // search: new FormControl(),
      toDate: new FormControl(new Date()),
      fromDate: new FormControl(new Date('2020-09-01')),
    });
    this.setDates()
  }

  setDates(): void {
    const from = this.search.controls.fromDate.value;
    const to = this.search.controls.toDate.value;
    const to_Date = new Date(to);
    const from_Date = new Date(from);
    const diff = to_Date.getDate() - from_Date.getDate();

    for (let i = 0; i < diff; i++) {
      const currentDay = diff - i;
      const month = JSON.stringify(from_Date.getMonth() + 1).length === 1 ? `0${from_Date.getMonth() + 1}`: from_Date.getMonth() + 1
      const date_str = `${from_Date.getFullYear()}-${month}-${currentDay}`;
      this.dates.push(date_str);
    }
    this.nasaService.updateDates(this.dates)
    console.log(this.dates);
  }
  submit(): void {
    // console.log(this.search.controls.search.value);
    console.log(this.search.controls.toDate.value);
    console.log(this.search.controls.fromDate.value);
  }

}
