import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Users } from '../../interfaces/users.interface';


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
    this.getProducts();
  }

  public getProducts(){
    this.usersService.getUsers().subscribe(
      res => {
        this.users = res
      },
      err => console.log(err)
    )
  }

}
