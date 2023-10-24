import { Component } from '@angular/core';
import { Navigation } from '../../interfaces/nav.interface';


@Component({
  selector: 'shared-app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  auth: boolean = false;
  constructor() { }
  links: Navigation[]=[
    {link: 'home', icon: 'home', label: 'Inicio'},
    {link: 'contacto', icon: 'contact_support', label: 'Contactanos'},
    {link: 'servicios', icon: 'design_services', label: 'Servicios'},
    ]


}
