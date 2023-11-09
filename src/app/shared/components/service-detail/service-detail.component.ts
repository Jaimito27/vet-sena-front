import { Component } from '@angular/core';
import { SubService } from '../../interfaces/subservice.interface';

@Component({
  selector: 'shared-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss']
})
export class ServiceDetailComponent {







  subServices: SubService[] = [
    { name: 'Hospital canino', description: 'Lorem Ipsun no se que', active: false },
    { name: 'Hospital felino', description: 'Lorem Ipsun no se que', active: false },
    { name: 'Hospital Parvovirus - Infecciosos', description: 'Lorem Ipsun no se que', active: false },
    { name: 'Unidad de cuidados intensivos', description: 'Lorem Ipsun no se que', active: false }
  ];

  mostrarInfo(subService: SubService): void {
    // Cambiar el estado activo del servicio al que se le dio clic
    subService.active = !subService.active;
  }
}



