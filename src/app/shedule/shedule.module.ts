import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SheduleComponent } from './components/shedule/shedule.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SheduleComponent],
  imports: [CommonModule, RouterModule],
  exports:[
    SheduleComponent
  ]
})
export class SheduleModule {}
