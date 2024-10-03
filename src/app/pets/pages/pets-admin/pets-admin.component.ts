import { Component } from '@angular/core';


@Component({
  selector: 'app-pets-admin',
  templateUrl: './pets-admin.component.html',
  styleUrls: ['./pets-admin.component.scss']
})
export class PetsAdminComponent  {

  activeComponent: 'blocked' | 'active' | null = null;

  setActiveComponent(component: 'blocked' | 'active') {
    this.activeComponent = component;
  }




}
