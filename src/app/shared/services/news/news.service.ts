import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  key = '2c58dcfce82a588337844d6e754de8f2';
  url =
    'https://gnews.io/api/v3/search?q=covid-19&lang=sw&country=tz&image=required&token=';

  constructor(private httpClient: HttpClient) {}

  public getNews() {
    return this.httpClient.get(this.url + this.key);
  }
}
