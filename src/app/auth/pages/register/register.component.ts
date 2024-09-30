import { Component, OnInit } from '@angular/core';
import { RegisterUserService } from '../../services/register.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterUser } from '../../interfaces/register.interface';

import { FormUsersService } from 'src/app/shared/services/form-users.service';
import { AlertMessageService } from 'src/app/shared/services/alert-message.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit{
  public formRegister!: FormGroup;
  passwordMismatch = false;
  emailMismatch = false;

  constructor(
    private formUserService: FormUsersService,
    private registerUserService: RegisterUserService,
    private alertMessageService: AlertMessageService //mensaje de alerta
  ) {}

  ngOnInit(): void {
    this.formRegister = this.formUserService.createForm();
  }

  public validatePassword(): void {
    const password2 = document.getElementById('password2') as HTMLInputElement;
    const password = this.formRegister.get('password')?.value;
    this.passwordMismatch = password !== password2.value;
  }

  public validateEmail(): void {
    const email2 = document.getElementById('email2') as HTMLInputElement;
    const email = this.formRegister.get('email')?.value;
    this.emailMismatch = email !== email2.value;
  }

  public onSubmit(): void {
    if (this.formRegister.valid) {
      const userData: RegisterUser = this.formRegister.value;
      this.registerUserService.registerUser(userData).subscribe(
        (res) => {
          if (res.status === 409) {
            this.alertMessageService.alertMessage('Error', res.message, 'warning');
          } else if (res.status === 201) {
            this.alertMessageService.alertMessage('Atención', res.message, 'success')
            this.formRegister.reset();
          }
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error('El formulario no es válido');
    }
  }



}
