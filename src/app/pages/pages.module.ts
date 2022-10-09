import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { PagesRoutingModule } from './pages-routing.module';
// import components
import { BarChartComponent} from './bar-chart/bar-chart.component';
import { LineChartComponent} from './line-chart/line-chart.component';

@NgModule({
  declarations: [
    LineChartComponent,
    BarChartComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule,
    PagesRoutingModule
  ],
  exports:[
    LineChartComponent,
    BarChartComponent
  ]
})
export class PagesModule { }
