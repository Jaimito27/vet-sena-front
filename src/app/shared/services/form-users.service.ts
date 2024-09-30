import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormUsersService {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  createForm(): FormGroup{
    return this.formBuilder.group({
      doc_type: ['', Validators.required],
      ident_document: ['', [Validators.required, Validators.minLength(4)]],
      names: ['', Validators.required],
      last_name: [''],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      username: ['', Validators.required],
      role: ['user'],
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
}
