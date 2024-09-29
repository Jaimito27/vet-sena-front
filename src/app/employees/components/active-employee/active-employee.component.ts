import { Component } from '@angular/core';

import { Users } from 'src/app/users/interfaces/users.interface';
import { EmployeesService } from '../../services/employees.service';
import { UsersService } from 'src/app/users/services/users.service';
import Swal, { SweetAlertIcon } from 'sweetalert2';
@Component({
  selector: 'app-active-employee',
  templateUrl: './active-employee.component.html',
  styleUrls: ['./active-employee.component.scss']
})
export class ActiveEmployeeComponent {

employees: Users[] = []

constructor(
  private employeeService: EmployeesService,
  private userService: UsersService //se importa el users service para usar desde ahi el metodo para blouquear usuarios, en este caso empleados
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
      this.alertMessage('Atención', 'Empleado bloqueado exitosamente', 'success')
      this.getEmployees();
    }, err => {
      this.alertMessage('Error', err, 'warning')
    }
  )
}


//función para el sweet alert
public alertMessage(title: string, text: string, icon: SweetAlertIcon): void {
  Swal.fire({
    title,
    text,
    icon,
  });
}


}
