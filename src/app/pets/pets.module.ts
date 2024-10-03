import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';

import { PetsComponent } from './pages/pets/pets.component';
import { PetsListComponent } from './components/pets-list/pets-list.component';
import { RegisterPetComponent } from './components/register-pet/register-pet.component';
import { PetsAdminComponent } from './pages/pets-admin/pets-admin.component';
import { PetsAdminActiveComponent } from './components/pets-admin-active/pets-admin-active.component';
import { PetsAdminLockedComponent } from './components/pets-admin-locked/pets-admin-locked.component';



@NgModule({
  declarations: [PetsComponent, PetsListComponent, RegisterPetComponent, PetsAdminComponent, PetsAdminActiveComponent, PetsAdminLockedComponent],
  imports: [CommonModule, MatTooltipModule],
  exports:[PetsListComponent, RegisterPetComponent]
})
export class PetsModule {}
