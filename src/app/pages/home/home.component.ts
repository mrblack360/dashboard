import { Component, OnInit } from '@angular/core';

import { DataService } from '../../shared/services/data.service';
import { coerceCssPixelValue } from '@angular/cdk/coercion';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  CountryData = [];
  WorldData: WorldData;
  latestCountryData: any;
  latestDate: Date;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getCountryData().subscribe((data: any[]) => {
      this.CountryData = data;
      this.latestCountryData = data[data.length - 1];
      this.latestDate = data[data.length - 1].Date;
    });
    this.dataService.getWorldData().subscribe((data: any) => {
      this.WorldData = data;
    });
  }
}

export interface WorldData {
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}
