import { Component } from '@angular/core';

@Component({
  selector: 'app-chart-bar-holder',
  standalone: false,
  
  templateUrl: './chart-bar-holder.component.html',
  styleUrl: './chart-bar-holder.component.css'
})
export class ChartBarHolderComponent {
  bars = [
    {name:"A" , value:16},
    {name:"B" , value:20},
    {name:"C" , value:5},
    {name:"D" , value:30},
    {name:"E" , value:10}
  ]

  calculateheight(value : number): number {
    return (Math.min(value , 20) * 100) / 20; 
  }

  backgroundColor(value :number) : string {
    if(value <= 5){
      return 'red';
    }else if(value > 5 && value <= 15){
      return 'orange';
    }else{
      return 'blue';
    }
  }
}
