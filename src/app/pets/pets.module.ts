import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';

import { PetsComponent } from './pages/pets.component';
import { PetsListComponent } from './components/pets-list/pets-list.component';
import { RegisterPetComponent } from './components/register-pet/register-pet.component';


@NgModule({
  declarations: [PetsComponent, PetsListComponent, RegisterPetComponent],
  imports: [CommonModule, MatTooltipModule],
  exports:[PetsListComponent, RegisterPetComponent]
})
export class PetsModule {}
