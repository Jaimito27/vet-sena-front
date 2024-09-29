import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/users/interfaces/users.interface';
import { EmployeesService } from '../../services/employees.service';
import { UsersService } from 'src/app/users/services/users.service';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Component({
  selector: 'app-locked-employee',
  templateUrl: './locked-employee.component.html',
  styleUrls: ['./locked-employee.component.scss']
})
export class LockedEmployeeComponent implements OnInit {

employeesLocked: Users[] = []

constructor(
  private employeeService: EmployeesService,
  private usersService: UsersService // para insertar la funcionalidad de desbloqueo
){}

ngOnInit(): void {
  this.getEmployeesLocked();
}

public getEmployeesLocked(){
  this.employeeService.getEmployeesLocked().subscribe(
    response => {
      this.employeesLocked = response
    }, error => {
      console.error(error)
    }
  )
}

public unlockEmployee(id: string){
  this.usersService.unlockUser(id).subscribe(
    response => {
      this.getEmployeesLocked();
      this.alertMessage('Atención', `El empleado ${response.names} fue desbloqueado exitosamente`, 'success')
    }, error => {
      console.error(error)
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
