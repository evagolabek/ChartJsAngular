import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import deferred from 'chartjs-plugin-deferred';

@Component({
  selector: 'app-my-pie-chart',
  templateUrl: './my-pie-chart.component.html',
  styleUrls: ['./my-pie-chart.component.css']
})

export class MyPieChartComponent implements OnInit {

  public pieChartLabels = ['Sales Q1', 'Sales Q2']; //, 'Sales Q3', 'Sales Q4'];
  public pieChartData = [120, 150]; //, 180, 90];
  public pieChartType = 'pie';

  public pieChartOptions = {
    plugins: {
      deferred: {
        xOffset: 150,   // defer until 150px of the canvas width are inside the viewport
        yOffset: '50%', // defer until 50% of the canvas height are inside the viewport
        delay: 200      // delay of 500 ms after the canvas is considered inside the viewport
      }
    }
  };

  constructor() { }

  @ViewChild("myCanvas") canvas: ElementRef;
  @ViewChild('myChart') myChart;
  chartColors;

  ngOnInit() {
    let gradient1 = this.canvas.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 400);
    gradient1.addColorStop(0, 'yellow');
    gradient1.addColorStop(1, 'blue');

    let gradient2 = this.canvas.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 400);
    gradient2.addColorStop(0, 'green');
    gradient2.addColorStop(1, 'red');

    this.chartColors = [
      {
        borderColor: ['gray', 'gray'],
        backgroundColor: [gradient1, gradient2]
      }
    ];


    this.myChart.pluginService.register(deferred);

  }

}
