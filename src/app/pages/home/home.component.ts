import { Component, OnInit } from '@angular/core';

import { DataService } from '../../shared/services/data.service';
import { coerceCssPixelValue } from '@angular/cdk/coercion';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  myData = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.sendGetRequest().subscribe((data: any[]) => {
      this.myData = data;
    });
  }
}
