import { Component } from '@angular/core';
import { Navigation } from '../../interfaces/nav.interface';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/auth/pages/login/login.component';


@Component({
  selector: 'shared-app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  links: Navigation[]=[
    {link: 'home', icon: 'home', label: 'Inicio'},
    {link: 'contacto', icon: 'contact_support', label: 'Contactanos'},
    {link: 'servicios', icon: 'design_services', label: 'Servicios'},
    {link: 'shedule', icon: 'view_agenda', label: 'Citas'},
    ]

  auth: boolean = false;

  constructor(private dialogRef: MatDialog,) { }

  openDialog(): void {
     const dialogRef: MatDialogRef<LoginComponent> = this.dialogRef.open(LoginComponent, {
      width: '25%',
      disableClose: true,

    });


}}
