import { Component } from '@angular/core';
import { SubService } from '../../interfaces/subservice.interface';

@Component({
  selector: 'shared-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss']
})
export class ServiceDetailComponent {


  subServices: SubService[] = [
    { name: 'Hospital canino', description: 'Lorem Ipsun no se que' },
    { name: 'Hospital felino', description: 'Lorem Ipsun no se que' },
    { name: 'Hospital Parvovirus - Infecciosos', description: 'Lorem Ipsun no se que' },
    { name: 'Unidad de cuidados intensivos', description: 'Lorem Ipsun no se que' }
  ];

  infoVisible: boolean = false;
  active: boolean = false;
  mostrarInfo() {
    this.infoVisible = !this.infoVisible;
    this.active = !this.active;
  }
}



