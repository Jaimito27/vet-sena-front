import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports:[
    LoginComponent
  ]
})
export class GetIntoModule { }
