import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SheduleComponent } from './pages/shedule/shedule.component'
import { RouterModule } from '@angular/router';
import { RedirectPetsComponent } from './components/redirect-pets/redirect-pets/redirect-pets.component';
import { ApplicationFormComponent } from './components/application-form/application-form.component';
import { ScheduledAppointmentsComponent } from './components/scheduled-appointments/scheduled-appointments.component';

@NgModule({
  declarations: [SheduleComponent, RedirectPetsComponent, ApplicationFormComponent, ScheduledAppointmentsComponent],
  imports: [CommonModule, RouterModule],
  exports:[
    SheduleComponent
  ]
})
export class SheduleModule {}
