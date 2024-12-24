import { Component, HostBinding, input, Input } from '@angular/core';

@Component({
  selector: 'app-chart-bar',
  standalone: false,
  
  templateUrl: './chart-bar.component.html',
  styleUrl: './chart-bar.component.css'
})
export class ChartBarComponent {
  @Input() text: string = '';
  @Input() height: number = 0;
  @Input() Color: string = 'gray';

  @HostBinding('style.height')
  get Height() : string {
    return `${this.height}%`;
  }

  @HostBinding('style.backgroundColor')
  get color(): string {
    return `${this.Color}`;
  }

}
