import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './pages/users.component';
import { LockedUsersComponent } from './components/locked/locked.component';
import { ActiveUsersComponent } from './components/active/active.component';
import { MatTooltipModule } from '@angular/material/tooltip';




@NgModule({
  declarations: [ UsersComponent, LockedUsersComponent, ActiveUsersComponent],
  imports: [
    CommonModule,
    MatTooltipModule
  ]
})
export class UsersModule { }
