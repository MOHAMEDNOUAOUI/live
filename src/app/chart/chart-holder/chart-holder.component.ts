import { Component } from '@angular/core';
import { ValueChangeEvent } from '@angular/forms';

@Component({
  selector: 'app-chart-holder',
  templateUrl: './chart-holder.component.html',
  styleUrl: './chart-holder.component.css'
})
export class ChartHolderComponent {
  Data = [
    {name:"A" , value:140},
    {name:"B" , value:49},
    {name:"C" , value:12}
  ]

  calculteHeight(height : number) : number {
    return (Math.min(height , 120) * 100) / 120;
  }
}
