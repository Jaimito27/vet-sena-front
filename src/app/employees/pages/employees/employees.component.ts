import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UsersFormComponent } from 'src/app/users/components/users-form/users-form.component';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {

  constructor(
    private dialogRef: MatDialog
  ){}

  activeComponent: 'blocked' | 'active' | null = null;

  setActiveComponent(component: 'blocked' | 'active') {
    this.activeComponent = component;
  }

  openDialogCreateEmployee(){
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
    dialogRef.componentInstance.isFromEmployees = true; //es verdadero por ende se habilitará el campo de role cuando se abra el modal desde aca
  }
}
