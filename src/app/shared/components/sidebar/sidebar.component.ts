import { Component } from '@angular/core';
import { Service } from '../../interfaces/services.interface';


@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  services: Service[] = [
    {image: 'local_hospital', name: 'Hospitalización'},
    {image: 'vaccines', name: 'Vacunación'},
    {image: 'emergency', name: 'Urgencias las 24 horas'},
    {image: 'surgical', name: 'Cirugia veterinaria'},
    {image: 'clinical_notes', name: 'Consulta veterinaria'},
    {image: 'diagnosis', name: 'Examenes veterinarios'},
  ];
}
