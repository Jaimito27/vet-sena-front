import { Component, Input, OnInit } from '@angular/core';
import { Users } from '../../interfaces/users.interface';
import { UsersService } from '../../services/users.service';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Component({
  selector: 'app-locked-user',
  templateUrl: './locked.component.html',
  styleUrls: ['./locked.component.scss']
})
export class LockedUsersComponent implements OnInit {

usersLocked: Users[] = []

constructor(
  private usersService: UsersService,
){}

ngOnInit(){
  this.getUsersLocked();
}


public getUsersLocked(){
  this.usersService.getUsersLocked().subscribe(
    res => {
      this.usersLocked = res;
    },err => {
      console.error(err)
    }
  )
}

public unlockUser(id: string){
  this.usersService.unlockUser(id).subscribe(
    res =>{
      this.getUsersLocked()
      this.alertMessage('Atención', `El usuario ${res.names} fue desbloqueado exitosamente`, 'success')
    }, err =>{
      console.error(err);

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
