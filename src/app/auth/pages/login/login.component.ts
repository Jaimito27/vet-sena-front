import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent {

  public formLogin!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
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
          console.log(response.token);
        }, error: (error) => {
          console.error('Error en el login', error);
          //manejo del error
        }
      })
    }
  }


}


