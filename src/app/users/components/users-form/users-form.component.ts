import { Component, Inject, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { RegisterUser } from 'src/app/auth/interfaces/register.interface';
import { RegisterUserService } from 'src/app/auth/services/register.service';
import { AlertMessageService } from 'src/app/shared/services/alert-message.service';
import { FormUsersService } from 'src/app/shared/services/form-users.service';
import { UsersService } from '../../services/users.service';
import { Users } from '../../interfaces/users.interface';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss'],
})
export class UsersFormComponent implements OnInit {
  public formCreateUser!: FormGroup;
  isEditing: boolean = false;

  @Input() isFromEmployees: boolean = false; //para verificar si se abre desde el componente de empleados y habilitar el campo de role
  @Output() userUpdated = new EventEmitter<void>(); //emite un evento que al actulizar usuario, el componete que lista los usuarios se actuliza
  constructor(
    private dialogRef: MatDialogRef<UsersFormComponent>,
    private formUserService: FormUsersService, //formulario
    private registerUserService: RegisterUserService,
    private usersService: UsersService,
    private alertMessageService: AlertMessageService,
    @Inject(MAT_DIALOG_DATA) public data: any //inyectar los datos

  ) {}

  ngOnInit(): void {
    this.formCreateUser = this.formUserService.createForm();

    this.isEditing = this.data.isEditing;

    if (this.isEditing) {
      this.formCreateUser.patchValue(this.data.userData);
    }
  }

  public onSubmit(): void {
    if (this.formCreateUser.valid) {
      const userData: Users = this.formCreateUser.value;

      if (this.data.isEditing) {
        this.usersService.updateUser(this.data.userData.id, userData).subscribe(
          (response) => {
            this.dialogRef.close();
            this.userUpdated.emit(); //emite el evento
            this.alertMessageService.alertMessage(
              'Atención',
              `El usuario ${response.names} fue actualizado con exito`,
              'success'
            );
          },
          (error) => {
            this.alertMessageService.alertMessage('Error', error.error.message, 'error');
          }
        );
      } else {
        this.registerUserService.registerUser(userData).subscribe(
          (response) => {
            if (response.status === 409) {
              this.alertMessageService.alertMessage(
                'Error',
                response.message,
                'warning'
              );
            } else if (response.status === 201) {
              this.alertMessageService.alertMessage(
                'Atención',
                response.message,
                'success'
              );
              this.dialogRef.close()
              this.formCreateUser.reset();
            } else {
              this.alertMessageService.alertMessage(
                'Error',
                'El formulario no es válido',
                'error'
              );
            }
          },
          (error) => {
            this.alertMessageService.alertMessage('Error', error, 'error');
          }
        );
      }
    }
  }
}
