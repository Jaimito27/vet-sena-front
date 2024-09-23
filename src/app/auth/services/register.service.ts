import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RegisterUser } from '../interfaces/register.interface';
import { Observable } from 'rxjs';
import { ResponseRegister } from '../interfaces/response.interface';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {

  API_URL: string = 'http://localhost:3000/'
  constructor(private http: HttpClient) {}

  registerUser(user: RegisterUser): Observable<ResponseRegister>{
    return this.http.post<ResponseRegister>(`${this.API_URL}users`, user)
  }



}
