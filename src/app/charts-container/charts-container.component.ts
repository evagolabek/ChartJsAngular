import { Component, OnInit } from '@angular/core';
import { LineChart } from '../my-line-chart/my-line-chart.component';

@Component({
  selector: 'app-charts-container',
  templateUrl: './charts-container.component.html',
  styleUrls: ['./charts-container.component.css']
})
export class ChartsContainerComponent implements OnInit {
  salesWinter: LineChart;

  constructor() { }

  ngOnInit() {
    this.salesWinter ={
      title: "Sales Winter",
      data: [
        {data: [40, 50, 60, 20], label: 'Sweaters'},
        {data: [60, 80, 20, 40], label: 'Trousers'}
      ],
      labels: ['December', 'January', 'February', 'March']
    };
  }
}
