import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';




import { NasaService } from '../../services/nasa.service';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  toError: boolean = false;
  fromError: boolean = false;
  constructor(private nasaService: NasaService, private fb: FormBuilder, private searchService: SearchService) { }
  search = this.fb.group({
    fromDate: [new Date('2020-09-01'), Validators.compose([this.checkFromDateInPast()])],
    toDate: [new Date()],
  })

  ngOnInit(): void {
    this.setDates();
    this.search.valueChanges.subscribe((value)=>{
      console.log('value changes to: ',value);
       const forbiddenTo = value.toDate < value.fromDate
       console.log('forbiddenTo: ', forbiddenTo);
       forbiddenTo ? this.toError = true : this.toError = false;
// Todo:: check validation
       const now = new Date();
       const fromDate = new Date(value.fromDate);
       const forbiddenFrom = fromDate >= now;
       console.log('forbiddenFrom: ', forbiddenFrom);
       forbiddenTo ? this.fromError = true : this.fromError = false;
    })
  }

  setDates(): void {
    const dates = [];
    const from = this.search.controls.fromDate.value;
    const to = this.search.controls.toDate.value;
    const to_Date = new Date(to);
    const from_Date = new Date(from);
    const diff = to_Date.getDate() - from_Date.getDate() + 1;

    for (let i = 0; i < diff; i++) {
      const currentDay = to_Date.getDate() - i;
      const month = JSON.stringify(from_Date.getMonth() + 1).length === 1 ? `0${from_Date.getMonth() + 1}` : from_Date.getMonth() + 1
      const date_str = `${from_Date.getFullYear()}-${month}-${currentDay}`;
      dates.push(date_str);
    }
    this.nasaService.updateDates(dates)
  }

  submit(): void {
    this.searchService.addSearch(this.getDateByControlValue(this.search.controls.fromDate.value),this.getDateByControlValue(this.search.controls.toDate.value))
    this.setDates();
  }

  checkFromDateInPast(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const now = new Date();
      const forbidden = control.value >= now
      return forbidden ? { isForbidden: true } : null;
    };
  }

  isDisable(): boolean {    
    return (this.toError ==true ||  this.fromError ==true);
  }

  getDateByControlValue(control: string): string {
   const controlDate = new Date(control);
   const currentDay = controlDate.getDate();
   const month  = JSON.stringify(controlDate.getMonth() + 1).length === 1 ? `0${controlDate.getMonth() + 1}` : controlDate.getMonth() + 1;
   const date_str = `${currentDay}-${month}-${controlDate.getFullYear()}`;
   return date_str;
  }
}
