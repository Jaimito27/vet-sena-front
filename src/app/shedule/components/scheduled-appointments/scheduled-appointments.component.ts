import { Component } from '@angular/core';
import { Appointmnets } from '../../interfaces/appointments.interface';

@Component({
  selector: 'shedule-scheduled-appointments',
  templateUrl: './scheduled-appointments.component.html',
  styleUrls: ['./scheduled-appointments.component.scss']
})
export class ScheduledAppointmentsComponent {
  appointments: Appointmnets[]=[
    {date: '09/11/2023 - 19:00', place: 'Veterinaria', service: 'Peluqeuria', professional: 'Jaime Menoyos', price: 50000},
    {date: '09/11/2023 - 19:00', place: 'Veterinaria', service: 'Medicina general', professional: 'Jaime Menoyos', price: 50000},
    {date: '09/11/2023 - 19:00', place: 'Veterinaria', service: 'Medicina general', professional: 'Jaime Menoyos', price: 50000},
    {date: '09/11/2023 - 19:00', place: 'Veterinaria', service: 'Medicina general', professional: 'Jaime Menoyos', price: 50000},
    {date: '09/11/2023 - 19:00', place: 'Veterinaria', service: 'Medicina general', professional: 'Jaime Menoyos', price: 50000}
  ]
}
