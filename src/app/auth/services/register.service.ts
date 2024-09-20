import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RegisterUser } from '../interfaces/register.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {

  API_URL: string = 'http://localhost:3000/'
  constructor(private http: HttpClient) {}

  registerUser(user: RegisterUser): Observable<RegisterUser>{
    return this.http.post<RegisterUser>(`${this.API_URL}users`, user)
  }



}
