import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.css']
})
export class MyBarChartComponent implements OnInit {

  constructor() { }
  
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    color: [
      'orange',    // color for data at index 0
      'green',   // color for data at index 1
      'yellow',  // color for data at index 2
      'black',  // color for data at index 3
    ]
  };
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  // public barChartColors2: = [
  //   { backgroundColor: 'yellow'},
  //   { backgroundColor: 'green' }
  // ]

  @ViewChild("myCanvas") canvas: ElementRef;
  barChartColors;

  ngOnInit() {
    let gradient = this.canvas.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, 'orange');
    gradient.addColorStop(1, 'purple');
    this.barChartColors = [
      {
        borderColor: 'gray',
        backgroundColor: gradient,
        //pointRadius: 8, //not for bar chart
        // pointBackgroundColor: 'yellow',
      }
    ];
  }
}