import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableLike } from 'rxjs';
import { environment } from 'src/environments/environments';
import { Users } from '../interfaces/users.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly API_URL: string = environment.API_URL;

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<Users[]>{
    return this.http.get<Users[]>(`${this.API_URL}/users`);
  }

  public getUsersLocked(): Observable<Users[]>{
    return this.http.get<Users[]>(`${this.API_URL}/users/locked`)
  }

  public updateUser(id: string, user: Users):Observable<Users>{
    return this.http.patch<Users>(`${this.API_URL}/users/${id}`, user)
  }

  public blockUser(id: string):Observable<Users>{
    return this.http.patch<Users>(`${this.API_URL}/users/delete/${id}`, {})
  }

  public unlockUser(id: string): Observable<Users>{
    return this.http.patch<Users>(`${this.API_URL}/users/unlock/${id}`, {})
  }
}
