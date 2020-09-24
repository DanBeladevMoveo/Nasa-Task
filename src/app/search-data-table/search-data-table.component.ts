import { Component, OnInit } from '@angular/core';
import { SearchData } from '../searchData';
import { SearchService } from '../services/search.service';



// const ELEMENT_DATA: SearchData[] = [
//   { position: 1, from: 'Hydrogen', to: 's' },
//   { position: 2, from: 'Helium', to: 'sda' },
//   { position: 3, from: 'Lithium', to: 'dasdas' },
//   { position: 4, from: 'Beryllium', to: 'dsadas' },
//   { position: 5, from: 'Boron', to: 'dasdas' },
// ];

@Component({
  selector: 'app-search-data-table',
  templateUrl: './search-data-table.component.html',
  styleUrls: ['./search-data-table.component.scss']
})
export class SearchDataTableComponent implements OnInit {
  displayedColumns: string[] = [/* 'position', */ 'from', 'to'];
  // dataSource = ELEMENT_DATA;
  dataSource: SearchData[] =[];
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.dataSource = this.searchService.getSearches();
  }

}
