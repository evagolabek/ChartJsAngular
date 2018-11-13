import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-my-pie-chart',
  templateUrl: './my-pie-chart.component.html',
  styleUrls: ['./my-pie-chart.component.css']
})

export class MyPieChartComponent implements OnInit {

  public pieChartLabels = ['Sales Q1', 'Sales Q2']; //, 'Sales Q3', 'Sales Q4'];
  public pieChartData = [120, 150]; //, 180, 90];
  public pieChartType = 'pie';

  constructor() { }

  @ViewChild("myCanvas") canvas: ElementRef;
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
  }

}
