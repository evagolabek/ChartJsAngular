import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-my-line-chart',
  templateUrl: './my-line-chart.component.html',
  styleUrls: ['./my-line-chart.component.css']
})
export class MyLineChartComponent implements OnInit {


  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March'];
  public lineChartOptions:any = {
    responsive: true
  };
  
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  constructor() { }

  @ViewChild("myCanvas") canvas: ElementRef;
  lineChartColors;

  ngOnInit() {
    let gradient1 = this.canvas.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 200);
    gradient1.addColorStop(0, 'orange');
    gradient1.addColorStop(1, 'purple');

    let gradient2 = this.canvas.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 200);
    gradient2.addColorStop(0, 'yellow');
    gradient2.addColorStop(1, 'green');

    this.lineChartColors = [
      {
        borderColor: gradient1,
        backgroundColor: 'rgba(255, 255, 255, 0)',
        // borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        pointRadius: 15,
      },
      {
        borderColor: gradient2,
        backgroundColor: 'rgba(255, 255, 255, 0)', 
        pointBackgroundColor: 'rgba(77,83,96,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(77,83,96,1)'
      }
    ];
  }

}

