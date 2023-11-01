import { Component, OnInit } from '@angular/core';
import { Navigation } from '../../interfaces/nav.interface';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/auth/pages/login/login.component';


@Component({
  selector: 'shared-app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  linksDefault: Navigation[]=[
    {link: 'inicio/home', icon: 'home', label: 'Inicio'},
    {link: 'inicio/contacto', icon: 'contact_support', label: 'Contactanos'},
    {link: 'inicio/servicios', icon: 'design_services', label: 'Servicios'}
    ]

  linksAuth: Navigation[]=[
    {link: 'shedule', icon: 'view_agenda', label: 'Citas'},
    {link: 'pets', icon: 'pet_supplies', label: 'Mascotas'},
    {link: 'profile', icon: 'person', label: 'Perfil'},
  ]

  auth: boolean = true;

  links: Navigation[] = []

  constructor(private dialogRef: MatDialog,) { }
  ngOnInit(): void {
    this.links = this.linksDefault
    if(this.auth){
      this.links = [...this.linksDefault, ...this.linksAuth];
    }
  }

  openDialog(): void {
     const dialogRef: MatDialogRef<LoginComponent> = this.dialogRef.open(LoginComponent, {
      width: '25%',
      disableClose: true,

    });



}}
