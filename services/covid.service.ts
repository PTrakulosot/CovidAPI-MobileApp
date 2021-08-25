import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  url = "https://disease.sh/v3/covid-19/"
  

  constructor(private httpClient: HttpClient) { }

  getCountriesAll() {
    return this.httpClient.get(this.url+'countries');
  }
  
  getCountryDetail(iso3: string) {
    let targetUrl = this.url + 'countries/' + iso3;
    return this.httpClient.get(targetUrl);
  }

  
}
