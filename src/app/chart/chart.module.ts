import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartBarComponent } from './chart-bar/chart-bar.component';
import { ChartBarHolderComponent } from './chart-bar-holder/chart-bar-holder.component';



@NgModule({
  declarations: [
    ChartBarComponent,
    ChartBarHolderComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ChartBarHolderComponent]
})
export class ChartModule { }
