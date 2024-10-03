import { Component, Input, OnInit } from '@angular/core';
import { PetsService } from '../../services/pets.service';
import { Pet } from '../../interfaces/pet.interface';
import { AlertMessageService } from 'src/app/shared/services/alert-message.service';

@Component({
  selector: 'app-pets-admin-active',
  templateUrl: './pets-admin-active.component.html',
  styleUrls: ['./pets-admin-active.component.scss']
})
export class PetsAdminActiveComponent implements OnInit{

  @Input() showButtons: boolean = true;

  pets: Pet[] = []


  constructor(
    private petsService: PetsService,
    private alertMessageService: AlertMessageService
  ){}
  ngOnInit(): void {
    this.getPets()
  }

  public getPets(): void{
    this.petsService.getPets().subscribe(
      response => {
        this.pets = response;
      }, error =>{
        console.log(error)
      }
    )
  }

  public blockPets(id: string): void {
    this.petsService.blockPet(id).subscribe(
      response => {
        this.alertMessageService.alertMessage('Atención', `La mascota ${response.name} fue bloqueada exitosamente`, 'success');
        this.getPets()
      }, error => {
        this.alertMessageService.alertMessage('Error', error.error.message, 'error')
      }
    )
  }

}
