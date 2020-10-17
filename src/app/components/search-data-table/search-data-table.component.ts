import { Component, OnInit } from '@angular/core';
import { SearchData } from 'src/app/models/searchData';

import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-data-table',
  templateUrl: './search-data-table.component.html',
  styleUrls: ['./search-data-table.component.scss'],
})
export class SearchDataTableComponent implements OnInit {
  displayedColumns: string[] = ['from', 'to'];
  dataSource: SearchData[] = [];
  constructor(private searchService: SearchService) {}

  async ngOnInit() {
    const searches = await this.searchService.getSearches();
    this.dataSource = [...searches];
  }
}
