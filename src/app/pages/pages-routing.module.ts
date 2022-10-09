import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import { BarChartComponent} from './bar-chart/bar-chart.component';
import { LineChartComponent} from './line-chart/line-chart.component';
const routes:Routes = [
  {
    path:'line',
    component:LineChartComponent
  },
  {
    path:'bars',
    component:BarChartComponent
  },
  {
    path:'**',
    redirectTo:'line'
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'line'
  }
];

@NgModule({
  imports:[
    RouterModule.forChild(routes),
  ],
  exports:[
    RouterModule
  ]
})
export class PagesRoutingModule{}