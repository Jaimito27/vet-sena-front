import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { GetIntoRoutingModule } from './get-into-routing.module';

import { LoginComponent } from './pages/login/login.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    RouterModule,
    GetIntoRoutingModule
  ],
  exports:[
    LoginComponent
  ]
})
export class GetIntoModule { }
