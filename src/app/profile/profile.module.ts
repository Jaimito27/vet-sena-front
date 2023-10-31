import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsModule } from '../pets/pets.module';


import { ProfileComponent } from './pages/profile/profile.component';
import { UserInformationComponent } from './components/user-information/user-information.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';



@NgModule({
  declarations: [
    ProfileComponent,
    UserInformationComponent,
    EditUserComponent
  ],
  imports: [
    CommonModule,
    PetsModule
  ]
})
export class ProfileModule { }
