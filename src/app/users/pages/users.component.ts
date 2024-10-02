import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UsersFormComponent } from '../components/users-form/users-form.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  constructor(
    private dialogRef: MatDialog
  ){

  }

  activeComponent: 'blocked' | 'active' | null = null;

  setActiveComponent(component: 'blocked' | 'active') {
    this.activeComponent = component;
  }

  openDialogCreateUser(): void {
    const dialogRef: MatDialogRef<UsersFormComponent> = this.dialogRef.open(
      UsersFormComponent,
      {
        width: '35%',
        disableClose: true,
        data: {
          isEditing: false, // Indica si se está editando

        }
      }
    );

}

}
