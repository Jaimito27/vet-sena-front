import { Component, Input, OnInit } from '@angular/core';
import { Users } from '../../interfaces/users.interface';
import { UsersService } from '../../services/users.service';
import { AlertMessageService } from 'src/app/shared/services/alert-message.service';


@Component({
  selector: 'app-locked-user',
  templateUrl: './locked.component.html',
  styleUrls: ['./locked.component.scss']
})
export class LockedUsersComponent implements OnInit {

usersLocked: Users[] = []

constructor(
  private usersService: UsersService,
  private alertMessageService: AlertMessageService
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
      this.alertMessageService.alertMessage('Atención', `El usuario ${res.names} fue desbloqueado exitosamente`, 'success')

    }, err =>{
      console.error(err);

    }
  )
}


}
