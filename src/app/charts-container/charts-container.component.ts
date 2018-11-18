import { Component, OnInit } from '@angular/core';
import { LineChart } from '../my-line-chart/my-line-chart.component';

@Component({
  selector: 'app-charts-container',
  templateUrl: './charts-container.component.html',
  styleUrls: ['./charts-container.component.css']
})
export class ChartsContainerComponent implements OnInit {
  salesOctober: LineChart;

  constructor() { }

  ngOnInit() {
    this.salesOctober ={
      title: "Sales October",
      infoText: "my info text",
      lineDataPoints: [
        {name: 'pen', value: 35},
        {name: 'notebook', value: 28},
        {name: 'rubber', value: 10}
      ]
    };
}
}
