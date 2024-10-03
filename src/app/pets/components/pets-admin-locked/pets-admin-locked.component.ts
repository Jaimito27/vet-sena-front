import { Component, OnInit } from '@angular/core';
import { PetsService } from '../../services/pets.service';
import { Pet } from '../../interfaces/pet.interface';

@Component({
  selector: 'app-pets-admin-locked',
  templateUrl: './pets-admin-locked.component.html',
  styleUrls: ['./pets-admin-locked.component.scss']
})
export class PetsAdminLockedComponent implements OnInit{

  petsLocked: Pet[] = []

  constructor(
    private petsServise: PetsService
  ){}
  ngOnInit(): void {
 this.getPetsLocked();
  }

  public getPetsLocked(): void {
    this.petsServise.getPetsLocked().subscribe(
      response => {
        this.petsLocked = response;
      }, error => {
        console.error(error);

      }
    )
  }

}
