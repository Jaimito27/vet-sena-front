import { Component } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterUser } from '../../interfaces/register.interface';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  public formRegister!: FormGroup;
  passwordMismatch = false;
  emailMismatch = false;


  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService
  ) {}

  ngOnInit(): void {
    this.formRegister = this.formBuilder.group({
      doc_type: ['', Validators.required],
      ident_document: ['', [Validators.required, Validators.minLength(4)]],
      names: ['', Validators.required],
      last_name: [''],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ),
        ],
      ],
    });
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
      this.registerService.registerUser(userData).subscribe(
        (res) => {

          console.log(res.message);
          

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
