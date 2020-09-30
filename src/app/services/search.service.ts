import { Injectable } from '@angular/core';
import { SearchData } from '../models/searchData';

import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  lastSearches: SearchData[] = [];
  constructor(private firebaseService: FirebaseService) {}

  // getSearches(): SearchData[] {
  //   const searches = localStorage.getItem('searches');
  //   if(searches){
  //     const searches_arr: SearchData[] = JSON.parse(searches);
  //     return searches_arr;

  //   }
  //   return this.lastSearches.slice(0,5);
  // }

  getSearches() {
    const lastSearches: SearchData[] = this.firebaseService.getSearches();
    console.log('search service: last searches?', lastSearches);

    this.lastSearches = [...lastSearches];

    return this.lastSearches;
  }

  addSearch(from: string, to: string): void {
    const search: SearchData = {
      from: from,
      to: to,
    };
    this.lastSearches.unshift(search);
    // localStorage.setItem('searches',JSON.stringify(this.lastSearches.slice(0,5)));
    this.firebaseService.addSearch(search);
  }
}
