import { Component, OnInit, ElementRef, ViewChild, Input} from '@angular/core';
import { TextDisplayComponent } from '../text-display/text-display.component';

@Component({
  selector: 'app-my-line-chart',
  templateUrl: './my-line-chart.component.html',
  styleUrls: ['./my-line-chart.component.css']
})
export class MyLineChartComponent implements OnInit {

  //getter and setter for the line chart input
  _lineChart: LineChart;
  get lineChart(): LineChart {
    return this._lineChart;
  }
  @Input('lineChart')
  set lineChart(value: LineChart) {
    this._lineChart = value;
    this.renderChart();
  }

  @ViewChild('myCanvas') canvas: ElementRef<any>;

  constructor() { }

  //instantiate the intial values or permantent (colors)
  title: string;
  infoText: string;
  lineChartLabels: string[];
  lineChartDataSets: object[];
  
  lineChartColors =  [
    { backgroundColor: 'blue', borderColor: 'blue', pointRadius: 1 },
    { backgroundColor: 'red', borderColor: 'red', pointRadius: 1 },
    { backgroundColor: 'green', borderColor: 'green', pointRadius: 1 },
    { backgroundColor: 'orange', borderColor: 'orange', pointRadius: 1 },
    { backgroundColor: 'yellow', borderColor: 'yellow', pointRadius: 1 },
    { backgroundColor: '#28c80f', borderColor: '#00c76f', pointRadius: 1 },
    { backgroundColor: '#28c80f', borderColor: '#00c76f', pointRadius: 1 },
  ];

  lineChartType = 'line';
  lineChartOptions = {
    tooltips: {
      backgroundColor: '#000',
      bodyFontColor: '#FFFFFF',
      bodyFontSize: 14,
      displayColors: false
    },
    hover: { mode: null },
    scaleShowVerticalLines: false,
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          callback: function(value) {if (value % 1 === 0) {return value;}}
        },
        scaleLabel: {
          display: true,
          labelString: ''
        }
      }],
      xAxes: [{
        ticks: {
          autoSkip: false,
        },
        scaleLabel: {
          display: true,
          labelString: ''
        },
      }]
    }
  };

  lineChartLegend = true;
  

  renderChart() {
    this.title = this.lineChart.title;
    this.infoText = this.lineChart.infoText;
    this.lineChartOptions.scales.yAxes[0].scaleLabel.labelString = this.lineChart.yLabel;
    this.lineChartOptions.scales.xAxes[0].scaleLabel.labelString = this.lineChart.xLabel;
    this.lineChartLabels = this.lineChart.lineChartLabels;
    this.lineChartDataSets = this.lineChart.lineChartData.map(x => 
      ({
        data: x.data,
        label: x.label,
        fill: false,
        borderWidth: 0,
      })
    );
  }

  ngOnInit() { }
}

export interface LineChart {
  title: string;
  infoText: string;
  lineChartLabels: string[];
  lineChartData: LineChartData[];
  // lineChartColors: string[];??
  xLabel: string;
  yLabel: string;
  legend1?: string;
  legend2?: string;
}

export interface LineChartData {
  label: string; // company
  data: number[]; // monthlyUsage
}
