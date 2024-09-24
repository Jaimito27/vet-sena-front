import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { HttpClient } from '@angular/common/http';
import { AuthUser } from '../interfaces/auth-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly API_URL: string = environment.API_URL;
  private token: string | null = null;
  private authState = new BehaviorSubject<boolean>(this.isLogged());

  constructor(private http: HttpClient) {}

  public login(authUser: AuthUser): Observable <any>{
    return this.http.post(`${this.API_URL}/auth/login`, authUser)
  }

  public setToken(token: string): void{
    this.token = token;
    localStorage.setItem('token', token);
    this.authState.next(true);
  }

  getToken(): string | null{
    return localStorage.getItem('token');
  }

  isLogged(): boolean{
    return this.getToken() !== null;
  }

  logout(): void{
    this.token = null;
    localStorage.removeItem('token');
    this.authState.next(false)
  }
  get isLogged$(): Observable<boolean>{
    return this.authState.asObservable();
  }
}
