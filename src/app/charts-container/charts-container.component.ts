import { Component, OnInit } from '@angular/core';
import { LineChart } from '../my-line-chart/my-line-chart.component';
import { TextDisplay } from '../text-display/text-display.component';
import * as sal from 'sal.js'

@Component({
  selector: 'app-charts-container',
  templateUrl: './charts-container.component.html',
  styleUrls: ['./charts-container.component.css']
})
export class ChartsContainerComponent implements OnInit {
  salesWinter: LineChart;
  // availableProducts: TextDisplay;
  



  constructor() {}

  ngOnInit() {
    this.resetData();
    this.salesWinter = {
      infoText: 'some info text',
      title: 'title',
      // legend1: 'legend 1', //should be an array of companies ??
      // legend2: 'legend 2',
      xLabel: ' period',
      yLabel:' amount',
      lineChartLabels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],
      //get the data from observable into my chart - maybe tap?
      lineChartData: [ 
        {
         label: 'Kadek', 
         data: [ 8, 9, 11, 13, 12],
        },
        {
          label: 'Polpharma', 
          data: [ 21, 18, 17, 20, 19]
         },
         {
          label: 'Roumof', 
          data: [ 34, 22, 16, 19, 28]
         },
         {
          label: 'Plok', 
          data: [ 41, 38, 45, 40, 43]
         },
      ],
    };
    
  }

  resetData() {
    this.salesWinter = {
      title: 'Open en gesloten tickets',
      infoText: 'Aangemaakte en afgehandelde tickets',
      lineChartLabels: [],
      lineChartData: [],
      xLabel: 'Maand',
      yLabel: 'Tickets',
      legend1: 'Open tickets',
      legend2: 'Gesloten tickets',
    };
  }
}
