import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './pages/users.component';
import { LockedUsersComponent } from './components/locked/locked.component';
import { ActiveUsersComponent } from './components/active/active.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { UsersFormComponent } from './components/users-form/users-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthModule } from '../auth/auth.module';




@NgModule({
  declarations: [ UsersComponent, LockedUsersComponent, ActiveUsersComponent, UsersFormComponent],
  imports: [
    CommonModule,
    MatTooltipModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,

  ]
})
export class UsersModule { }
