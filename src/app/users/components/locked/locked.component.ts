import { Component, Input, OnInit } from '@angular/core';
import { Users } from '../../interfaces/users.interface';
import { UsersService } from '../../services/users.service';


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


}
