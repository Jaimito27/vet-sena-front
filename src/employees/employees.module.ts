import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './pages/employees/employees.component';

import { MatTooltipModule } from '@angular/material/tooltip';

import { ActiveEmployeeComponent } from './components/active-employee/active-employee.component';
import { LockedEmployeeComponent } from './components/locked-employee/locked-employee.component';



@NgModule({
  declarations: [
    EmployeesComponent,
    LockedEmployeeComponent,
    ActiveEmployeeComponent,

  ],
  imports: [
    CommonModule,
    MatTooltipModule
  ]
})
export class EmployeesModule { }
