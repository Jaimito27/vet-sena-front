import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './pages/users.component';
import { BlokedComponent } from './components/bloked/bloked.component';
import { ActiveComponent } from './components/active/active.component';
import { MatTooltipModule } from '@angular/material/tooltip';




@NgModule({
  declarations: [ UsersComponent, BlokedComponent, ActiveComponent],
  imports: [
    CommonModule,
    MatTooltipModule
  ]
})
export class UsersModule { }
