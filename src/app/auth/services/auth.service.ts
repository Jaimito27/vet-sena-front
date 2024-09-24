import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, map, tap } from 'rxjs';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { AuthStatus, LoginResponse, RegisterUser } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly baseUrl: string = environment.baseUrl;
  private http = inject(HttpClient);

  private _currentUser = new BehaviorSubject<RegisterUser | null>(null);
  private _authStatus = new BehaviorSubject<AuthStatus>(AuthStatus.cheking);

  //al mundo exterior
  public currentUser = this._currentUser.asObservable();
  public authStatus = this._currentUser.asObservable();
  constructor() {}

  login(username: string, password: string): Observable<boolean> {
    const url = `${this.baseUrl}/auth/login`;
    const body = {username, password};
    return this.http.post<LoginResponse>(url, body)
    .pipe(
      tap(({role, token})=>{
        this._currentUser.next(role);
        this._authStatus.next(AuthStatus.authenticated);
        localStorage.setItem('token', token);
        console.log({role, token});
      }),
      map(()=> true)
    );

  }
}
