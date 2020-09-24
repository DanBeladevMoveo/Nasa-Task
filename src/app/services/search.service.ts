import { Injectable } from '@angular/core';
import { SearchData } from '../searchData';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  lastSearches: SearchData[] = []
  constructor() { }

  getSearches(): SearchData[] {
    const searches = localStorage.getItem('searches');
    if(searches){
      const searches_arr: SearchData[] = JSON.parse(searches);
      return searches_arr;

    }
    return this.lastSearches.slice(0,5);
  }

  addSearch(from: string, to: string): void {
    const search: SearchData = {
      // position: 1,
      from: from,
      to: to
    }
    this.lastSearches.unshift(search);
    localStorage.setItem('searches',JSON.stringify(this.lastSearches.slice(0,5)))
  }
}
