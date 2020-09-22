import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { notEqual } from 'assert';
import { NasaService } from '../nasa.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  search = new FormGroup(
    {
      toDate: new FormControl(),
      fromDate: new FormControl()
    }
  )
  constructor(private nasaService: NasaService) { }

  ngOnInit(): void {
    this.search = new FormGroup({
      toDate: new FormControl(new Date()),
      fromDate: new FormControl(new Date('2020-09-01')),
    });
    this.setDates()
  }

  setDates(): void {
    const dates =[];
    const from = this.search.controls.fromDate.value;
    const to = this.search.controls.toDate.value;
    const to_Date = new Date(to);
    const from_Date = new Date(from);
    const diff = to_Date.getDate() - from_Date.getDate()+1;
    console.log(diff);
    

    

    for (let i = 0; i < diff; i++) {
      const currentDay = to_Date.getDate() - i;
      console.log(currentDay);
      
      const month = JSON.stringify(from_Date.getMonth() + 1).length === 1 ? `0${from_Date.getMonth() + 1}`: from_Date.getMonth() + 1
      const date_str = `${from_Date.getFullYear()}-${month}-${currentDay}`;
      dates.push(date_str);
    }
    this.nasaService.updateDates(dates)
  }

  submit(): void {
    const from = this.search.controls.fromDate.value;
    const to = this.search.controls.toDate.value;
    const now = new Date();
    // now.setHours(0,0,0,0)
    if(from >= now)
    {
      alert(`Please Select Date In Past`);
      return;
    }
    else if(to<from){
      alert(`Please 'TO' Date - greater than From`);
      return;
    }

    console.log(this.search.controls.toDate.value);
    console.log(this.search.controls.fromDate.value);
    this.setDates();
  }

}
