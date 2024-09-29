import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from 'src/app/users/interfaces/users.interface';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private readonly API_URL: string = environment.API_URL
  constructor(
    private http: HttpClient
  ) { }

  public getEmployees(): Observable <Users[]>{
    return this.http.get<Users[]>(`${this.API_URL}/users/employee`);
  }

  public getEmployeesLocked(): Observable<Users[]>{
    return this.http.get<Users[]>(`${this.API_URL}/users/employee/locked`)
  }
}
