import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-chart-item',
  templateUrl: './chart-item.component.html',
  styleUrl: './chart-item.component.css'
})
export class ChartItemComponent {
  @Input() text: string = '';
  @Input() height: number = 0;


}
