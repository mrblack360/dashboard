import { Component, OnInit } from '@angular/core';

import { DataService } from '../../shared/services/data.service';
import * as CanvasJS from '../../../assets/canvasjs/canvasjs/canvasjs.min';

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
  confirmedDataPoints: dataPoint[];
  deathDataPoints: dataPoint[];
  recoveredDataPoints: dataPoint[];
  chart;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getCountryData().subscribe((data: any[]) => {
      this.CountryData = data;
      this.latestCountryData = data[data.length - 1];
      this.latestDate = data[data.length - 1].Date;
      this.confirmedDataPoints = this.getConfirmedDataPoints(data);
      this.deathDataPoints = this.getDeathDataPoints(data);
      this.recoveredDataPoints = this.getRecoveredDataPoints(data);

      chart.data[0].set('dataPoints', this.confirmedDataPoints);
      chart.data[1].set('dataPoints', this.deathDataPoints);
      chart.data[2].set('dataPoints', this.recoveredDataPoints);
    });
    this.dataService.getWorldData().subscribe((data: any) => {
      this.WorldData = data;
    });

    let chart = new CanvasJS.Chart('chartContainer', {
      animationEnabled: true,
      title: {
        text: 'Takwimu za ugonjwa wa COVID-19 Nchini Tanzania',
      },
      axisY: {
        includeZero: false,
      },
      toolTip: {
        shared: true,
      },
      legend: {
        fontSize: 13,
      },
      data: [
        {
          type: 'area',
          showInLegend: true,
          name: 'Wagonjwa waliothibitishwa',
          yValueFormatString: '#,##0',
          xValueFormatString: 'MMM DD, YYYY',
          dataPoints: [],
        },
        {
          type: 'area',
          showInLegend: true,
          name: 'Wagonjwa waliofariki',
          yValueFormatString: '#,##0',
          dataPoints: [],
        },
        {
          type: 'area',
          showInLegend: true,
          name: 'Wagonjwa waliopona',
          yValueFormatString: '#,##0',
          dataPoints: [],
        },
      ],
    });
    console.log(chart);

    chart.render();
  }
  getConfirmedDataPoints(countryData: any[]): dataPoint[] {
    let dataPoints: dataPoint[] = [];
    let x: Date;
    let y: number;
    let DataPointObject: dataPoint;
    for (let i = 53; i < countryData.length; i++) {
      x = new Date(countryData[i].Date);
      y = countryData[i].Confirmed;
      DataPointObject = { x: x, y: y };
      dataPoints.push(DataPointObject);
    }
    return dataPoints;
  }
  getDeathDataPoints(countryData: any[]): dataPoint[] {
    let dataPoints: dataPoint[] = [];
    let x: Date;
    let y: number;
    let DataPointObject: dataPoint;
    for (let i = 53; i < countryData.length; i++) {
      x = new Date(countryData[i].Date);
      y = countryData[i].Deaths;
      DataPointObject = { x: x, y: y };
      dataPoints.push(DataPointObject);
    }
    return dataPoints;
  }
  getRecoveredDataPoints(countryData: any[]): dataPoint[] {
    let dataPoints: dataPoint[] = [];
    let x: Date;
    let y: number;
    let DataPointObject: dataPoint;
    for (let i = 53; i < countryData.length; i++) {
      x = new Date(countryData[i].Date);
      y = countryData[i].Recovered;
      DataPointObject = { x: x, y: y };
      dataPoints.push(DataPointObject);
    }
    return dataPoints;
  }
}

export interface WorldData {
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}
export interface dataPoint {
  x: Date;
  y: number;
}
