import { Component } from '@angular/core';
import { Navigation } from '../../interfaces/nav.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor() { }
  links: Navigation[]=[
    {link: 'home', icon: 'home', name: 'Inicio'},
    {link: 'contacto', icon: 'contact_support', name: 'Contactanos'},
    {link: 'servicios', icon: 'design_services', name: 'Servicios'},
    ]


}
