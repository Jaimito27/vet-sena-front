import { Component, OnInit } from '@angular/core';
import { PetsService } from '../../services/pets.service';
import { Pet } from '../../interfaces/pet.interface';
import { AlertMessageService } from 'src/app/shared/services/alert-message.service';

@Component({
  selector: 'app-pets-admin-locked',
  templateUrl: './pets-admin-locked.component.html',
  styleUrls: ['./pets-admin-locked.component.scss']
})
export class PetsAdminLockedComponent implements OnInit{

  petsLocked: Pet[] = []

  constructor(
    private petsServise: PetsService,
    private alertMessageService: AlertMessageService
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


  public unlockPets(id: string): void{
    this.petsServise.unlockPet(id).subscribe(
      response => {
        this.alertMessageService.alertMessage('Atención', `La mascota ${response.name} ha sido desbloqueada exitosamente`, 'success');
        this.getPetsLocked();
      }, error => {
        this.alertMessageService.alertMessage('Atención', error.error.message, 'error')
      }
    )
  }

}
