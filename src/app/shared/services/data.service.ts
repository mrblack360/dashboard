import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiServer = 'https://api.covid19api.com/summary';
  constructor(private httpClient: HttpClient) {}
  public sendGetRequest() {
    return this.httpClient.get(this.apiServer);
  }
}
