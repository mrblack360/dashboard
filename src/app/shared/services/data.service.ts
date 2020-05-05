import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private countryUrl = 'https://api.covid19api.com/country/tanzania';
  private worldUrl = 'https://api.covid19api.com/world/total';
  constructor(private httpClient: HttpClient) {}
  public getCountryData() {
    return this.httpClient.get(this.countryUrl);
  }
  public getWorldData() {
    return this.httpClient.get(this.worldUrl);
  }
}
