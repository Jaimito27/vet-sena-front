import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/users/interfaces/users.interface';
import { EmployeesService } from '../../services/employees.service';
import { UsersService } from 'src/app/users/services/users.service';
import { AlertMessageService } from 'src/app/shared/services/alert-message.service';

@Component({
  selector: 'app-locked-employee',
  templateUrl: './locked-employee.component.html',
  styleUrls: ['./locked-employee.component.scss']
})
export class LockedEmployeeComponent implements OnInit {

employeesLocked: Users[] = []

constructor(
  private employeeService: EmployeesService,
  private usersService: UsersService, // para insertar la funcionalidad de desbloqueo
  private alertMessageService: AlertMessageService
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
      this.alertMessageService.alertMessage('Atención', `El empleado ${response.names} fue desbloqueado exitosamente`, 'success')
    }, error => {
      console.error(error)
    }
  )
}


}
