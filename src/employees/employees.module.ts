import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './pages/employees/employees.component';
import { BlockedComponent } from './components/blocked/blocked.component';
import { ActiveComponent } from './components/active/active.component';



@NgModule({
  declarations: [
    EmployeesComponent,
    BlockedComponent,
    ActiveComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EmployeesModule { }
