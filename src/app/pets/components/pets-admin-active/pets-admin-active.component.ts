import { Component, Input, OnInit } from '@angular/core';
import { PetsService } from '../../services/pets.service';
import { Pet } from '../../interfaces/pet.interface';

@Component({
  selector: 'app-pets-admin-active',
  templateUrl: './pets-admin-active.component.html',
  styleUrls: ['./pets-admin-active.component.scss']
})
export class PetsAdminActiveComponent implements OnInit{

  @Input() showButtons: boolean = true;

  pets: Pet[] = []


  constructor(
    private petsService: PetsService
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

}
