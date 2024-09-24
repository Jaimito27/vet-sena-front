import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RegisterUser } from '../interfaces/register.interface';
import { Observable } from 'rxjs';
import { ResponseRegister } from '../interfaces/response.interface';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {

  private readonly baseUrl: string = environment.baseUrl
  private http = inject(HttpClient)
  constructor() {}

  registerUser(user: RegisterUser): Observable<ResponseRegister>{
    return this.http.post<ResponseRegister>(`${this.baseUrl}/users`, user)
  }



}
