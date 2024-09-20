import { Component } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  public formRegister!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService
  ) {}

  ngOnInit():void{
    this.formRegister = this.formBuilder.group({
      doc_type: ['', Validators.required],
      ident_document: ['', [Validators.required, Validators.minLength(4)]],
      names: ['', Validators.required],
      last_name: [''],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      email: ['',[Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      confirmEmail: ['', Validators.required],
    }, { validators: [this.passwordMatchValidator, this.emailMatchValidator] });
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value
      ? null : { mismatch: true };
  }

  emailMatchValidator(form: FormGroup) {
    return form.get('email')?.value === form.get('confirmEmail')?.value
      ? null : { mismatch: true };
  }

  public onSubmit(): void{

  }

}
