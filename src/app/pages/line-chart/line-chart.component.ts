import { Component, } from '@angular/core';
import { ChartOptions,ChartConfiguration } from 'chart.js';
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent {
  public lineChartData:ChartConfiguration<'line'>['data'] = {
    labels:[ 'January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets:[
      {
        data: [ 65, 59, 80, 81, 56, 55, 40 ],
        label: 'Serie A',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)'
      },
      {
        data: [ 61, 72, 31, 45, 58, 49, 40 ],
        label: 'Serie b',
        fill: true,
        tension: 0.5,
        borderColor: 'green',
        backgroundColor: 'rgba(178,23,165,0.3)'
      }
    ]
  }
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: !true
  };
  public lineChartLegend = true;
  constructor(){};

}
