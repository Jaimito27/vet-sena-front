import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';




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
    private router: Router

  ) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void{
    if(this.formLogin.valid){
      this.authService.login(this.formLogin.value).subscribe({
        next: (response)=>{
          this.authService.setToken(response.token);
          this.router.navigate(['/profile']);
        }, error: (error) => {
          console.error('Error en el login', error);
          //manejo del error
        }
      })
    }
  }




}


