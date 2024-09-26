import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Users } from '../../interfaces/users.interface';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Component({
  selector: 'app-active-user',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.scss']
})
export class ActiveUsersComponent implements OnInit {

  users: Users[] = [];

  constructor(
    private usersService: UsersService,
  ){}

  ngOnInit(){
    this.getUsers();
  }

  public getUsers(){
    this.usersService.getUsers().subscribe(
      res => {
        this.users = res
      },
      err => console.log(err)
    )
  }

  public blockUser(id: string){
    this.usersService.blockUser(id).subscribe(
      res => {
        this.alertMessage('Atención', 'Usuario bloqueado exitosamente', 'success')
        this.getUsers();
      }, error => {
        this.alertMessage('Atención', error, 'warning')
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
