import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  activeComponent: 'blocked' | 'active' | null = null;

  setActiveComponent(component: 'blocked' | 'active') {
    this.activeComponent = component;
  }
}
