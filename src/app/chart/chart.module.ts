import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartHolderComponent } from './chart-holder/chart-holder.component';
import { ChartItemComponent } from './chart-item/chart-item.component';



@NgModule({
  declarations: [
    ChartHolderComponent,
    ChartItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ChartHolderComponent]
})
export class ChartModule { }
