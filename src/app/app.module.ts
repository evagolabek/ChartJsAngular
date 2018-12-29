import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';
import { MyPieChartComponent } from './my-pie-chart/my-pie-chart.component';
import { MyLineChartComponent } from './my-line-chart/my-line-chart.component';
import { ChartsContainerComponent } from './charts-container/charts-container.component';
import { TextDisplayComponent } from './text-display/text-display.component';
//import { MyAreaChartComponent } from './my-area-chart/my-area-chart.component';

const routes: Routes = [
  {path: 'bar-chart', component: MyBarChartComponent},
  // {path: 'doughnut-chart', component: MyDoughnutChartComponent},
  {path: 'line-chart', component: MyLineChartComponent},
  {path: 'pie-chart', component: MyPieChartComponent},
  {path: '**', component: MyBarChartComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MyBarChartComponent,
    MyPieChartComponent,
    MyLineChartComponent,
    ChartsContainerComponent,
    TextDisplayComponent,
    //MyAreaChartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ChartsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
