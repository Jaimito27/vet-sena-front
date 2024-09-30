import { Component, OnInit } from '@angular/core';

import { Users } from 'src/app/users/interfaces/users.interface';
import { EmployeesService } from '../../services/employees.service';
import { UsersService } from 'src/app/users/services/users.service';
import { AlertMessageService } from 'src/app/shared/services/alert-message.service';

@Component({
  selector: 'app-active-employee',
  templateUrl: './active-employee.component.html',
  styleUrls: ['./active-employee.component.scss']
})
export class ActiveEmployeeComponent implements OnInit{

employees: Users[] = []

constructor(
  private employeeService: EmployeesService,
  private userService: UsersService, //se importa el users service para usar desde ahi el metodo para blouquear usuarios, en este caso empleados
  private alertMessageService: AlertMessageService
){}

ngOnInit(){
  this.getEmployees();
}

public getEmployees(){
  this.employeeService.getEmployees().subscribe(
    res =>{
      this.employees = res;

    }, err => {
      console.error(err);

    }
  )
}


public blockEmployee(id: string){
  this.userService.blockUser(id).subscribe(
    res => {
      this.alertMessageService.alertMessage('Atención', `El empleado ${res.names} fue bloqueado exitosamente`, 'success')
      this.getEmployees();
    }, err => {
      this.alertMessageService.alertMessage('Error', err, 'warning')
    }
  )
}



}
