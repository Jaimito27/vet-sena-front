import { Component } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {

  activeComponent: 'blocked' | 'active' | null = null;

  setActiveComponent(component: 'blocked' | 'active') {
    this.activeComponent = component;
  }
}
