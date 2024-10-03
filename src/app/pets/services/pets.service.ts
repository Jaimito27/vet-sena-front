import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { Pet } from '../interfaces/pet.interface';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  private readonly API_URL: string = environment.API_URL

  constructor(
    private http: HttpClient
  ) { }

  public getPets(): Observable<Pet[]>{
    return this.http.get<Pet[]>(`${this.API_URL}/pets`)
  }

  public getPetsLocked(): Observable<Pet[]>{
    return this.http.get<Pet[]>(`${this.API_URL}/pets/locked`)
  }

  public blockPet(id: string): Observable<Pet>{
    return this.http.patch<Pet>(`${this.API_URL}/pets/delete/${id}`, {})
  }

  public unlockPet(id: string): Observable<Pet>{
    return this.http.patch<Pet>(`${this.API_URL}/pets/unlock/${id}`, {})
  }
}
