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

<<<<<<< HEAD
  private readonly API_URL: string = environment.API_URL;
  constructor(private http: HttpClient) {}
=======
  private readonly baseUrl: string = environment.baseUrl
  private http = inject(HttpClient)
  constructor() {}
>>>>>>> f94616202ff189b7227050aa35c3d0f4a6ef7ef6

  registerUser(user: RegisterUser): Observable<ResponseRegister>{
    return this.http.post<ResponseRegister>(`${this.baseUrl}/users`, user)
  }



}
