import { Component, OnInit } from '@angular/core';

import { DataService } from '../../shared/services/data/data.service';
import { DataPoint } from '../../shared/interfaces/data-point';
import { WorldData } from '../../shared/interfaces/world-data';
import { CountryData } from '../../shared/interfaces/country-data';

import * as CanvasJS from '../../../assets/canvasjs/canvasjs/canvasjs.min';

import {
  getConfirmedDataPoints,
  getDeathDataPoints,
  getRecoveredDataPoints,
} from '../../shared/helpers/data-filters';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  CountryData = [];
  WorldData: WorldData = {};
  latestCountryData: CountryData = {};
  latestDate: Date;
  confirmedDataPoints: DataPoint[];
  deathDataPoints: DataPoint[];
  recoveredDataPoints: DataPoint[];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getCountryData().subscribe((data: any[]) => {
      this.CountryData = data;
      this.latestCountryData = data[data.length - 1];
      this.latestDate = data[data.length - 1].Date;
      this.confirmedDataPoints = getConfirmedDataPoints(data);
      this.deathDataPoints = getDeathDataPoints(data);
      this.recoveredDataPoints = getRecoveredDataPoints(data);

      chart.data[0].set('dataPoints', this.confirmedDataPoints);
      chart.data[2].set('dataPoints', this.deathDataPoints);
      chart.data[1].set('dataPoints', this.recoveredDataPoints);
    });
    this.dataService.getWorldData().subscribe((data: any) => {
      this.WorldData = data;
    });

    CanvasJS.addColorSet('customColorSet', ['#FF9933', '#1569C7', '#F44336']);

    let chart = new CanvasJS.Chart('chartContainer', {
      animationEnabled: true,
      colorSet: 'customColorSet',
      backgroundColor: 'transparent',
      title: {
        text: 'Takwimu za ugonjwa wa COVID-19 Nchini Tanzania',
        fontColor: 'white',
      },
      axisY: {
        includeZero: false,
        title: 'Idadi ya Watu',
        titleFontColor: 'white',
        labelFontColor: 'white',
      },
      axisX: {
        titleFontColor: 'white',
        labelFontColor: 'white',
      },
      toolTip: {
        shared: true,
      },
      legend: {
        fontColor: 'white',
        fontSize: 13,
        verticalAlign: 'top',
        horizontalAlign: 'left',
        dockInsidePlotArea: true,
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
          name: 'Wagonjwa waliopona',
          yValueFormatString: '#,##0',
          dataPoints: [],
        },
        {
          type: 'area',
          // color: '#F44336',
          showInLegend: true,
          name: 'Wagonjwa waliofariki',
          yValueFormatString: '#,##0',
          dataPoints: [],
        },
      ],
    });
    chart.render();
  }
}
