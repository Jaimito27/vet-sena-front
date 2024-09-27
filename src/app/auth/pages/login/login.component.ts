import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public formLogin!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private dialogRef: MatDialogRef<LoginComponent>
  ) {}

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.formLogin.valid) {
      this.authService.login(this.formLogin.value).subscribe({
        next: (response) => {
          if (response.token) { //si el token es valido, entonces se loguea, sino arroja una alerta con el mensaje que sea necesario
            this.authService.setToken(response.token);
            this.dialogRef.close();
            this.router.navigate(['/profile']);
          } else {
            this.alertMessage('Error', response.message, 'warning');
          }
        },
        error: (error) => {
          //manejo del error
          this.alertMessage('Error', error.error.message || 'Error de inicio de sesasión', 'error')
        },
      });
    }
  }

  public alertMessage(title: string, text: string, icon: SweetAlertIcon): void {
    Swal.fire({
      title,
      text,
      icon,
    });
  }
}
