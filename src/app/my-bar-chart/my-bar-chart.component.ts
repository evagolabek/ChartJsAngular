import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
// import * as jsPDF from 'jspdf';
// import * as html2canvas from 'html2canvas';
// const html2canvas = require('../../../node_modules/html2canvas');
// import html2pdf from 'html2pdf.js'

import * as jsPDF from 'jspdf';

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
    ],
    hover: {
      // Overrides the global setting
      mode: 'index'
  }
    
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
        backgroundColor: [ gradient, 'yellow'],
        hoverBackgroundColor: [ gradient, 'yellow'],
        //pointRadius: 8, //not for bar chart
        // pointBackgroundColor: 'yellow',
      }
    ];
  }


//   download() {
//     var doc = new jsPDF();
//     doc.text(20, 20, 'Hello world!');
//     doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
//     doc.addPage();
//     doc.text(20, 20, 'Do you like that?');

//     // Save the PDF
//     doc.save('Test.pdf');
// }

// download() {
//   html2canvas(this.canvas.nativeElement, <Html2Canvas.Html2CanvasOptions>{
//     onrendered: function(canvas: HTMLCanvasElement) {
//       var pdf = new jsPDF('p','pt','a4');    
//       var img = canvas.toDataURL("image/png");
//       pdf.addImage(img, 'PNG', 10, 10, 580, 300);
//       pdf.save('web.pdf');
//     }
//   });
// }

// download() {
//   var element = document.getElementById('test');
//   var opt = {
//     margin:       1,
//     filename:     'myfile.pdf',
//     image:        { type: 'jpeg', quality: 0.98 },
//     html2canvas:  { scale: 2 },
//     jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
//   };

//   // New Promise-based usage:
//   html2pdf().set(opt).from(element).save();
// }

download() {
  var pdf = new jsPDF('p', 'pt', 'letter');
  var source = document.getElementById('test');
  var margins = {
    top: 80,
    bottom: 60,
    left: 40,
    width: 522
  };
  // all coords and widths are in jsPDF instance's declared units
  // 'inches' in this case
  pdf.fromHTML(
      source, // HTML string or DOM elem ref.
      margins.left, // x coord
      margins.top, { // y coord
          'width': margins.width, // max width of content on PDF
      },

      function (dispose) {
          // dispose: object with X, Y of the last line add to the PDF 
          //          this allow the insertion of new lines after html
          pdf.save('Test.pdf');
      }, margins
  );
}


}