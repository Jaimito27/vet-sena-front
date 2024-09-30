import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Users } from '../../interfaces/users.interface';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UsersFormComponent } from '../users-form/users-form.component';
import { AlertMessageService } from 'src/app/shared/services/alert-message.service';

@Component({
  selector: 'app-active-user',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.scss']
})
export class ActiveUsersComponent implements OnInit {

  users: Users[] = [];

  constructor(
    private usersService: UsersService,
    private dialogRef: MatDialog,
    private alertMessageService: AlertMessageService
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
        this.alertMessageService.alertMessage('Atención', `El usuario ${res.names} fue bloqueado exitosamente`, 'success')
        this.getUsers();
      }, error => {
        this.alertMessageService.alertMessage('Atención', error, 'warning')
      }
    )
  }

  openDialogEditUser(): void {
    const dialogRef: MatDialogRef<UsersFormComponent> = this.dialogRef.open(
      UsersFormComponent,
      {
        width: '25%',
        disableClose: true,
      }
    );
  }

}
