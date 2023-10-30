import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsComponent } from './pages/pets.component';
import { PetsListComponent } from './components/pets-list/pets-list.component';
import { RegisterPetComponent } from './components/register-pet/register-pet.component';


@NgModule({
  declarations: [PetsComponent, PetsListComponent, RegisterPetComponent],
  imports: [CommonModule],
})
export class PetsModule {}
