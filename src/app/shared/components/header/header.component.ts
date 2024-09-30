import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Navigation } from '../../interfaces/nav.interface';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/auth/pages/login/login.component';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'shared-app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  authState: boolean = false;
  private authSubscription!: Subscription;

  linksDefault: Navigation[] = [
    { link: 'inicio/home', icon: 'home', label: 'Inicio' },
    { link: 'inicio/contacto', icon: 'contact_support', label: 'Contactanos' },
    { link: 'inicio/servicios', icon: 'design_services', label: 'Servicios' },
  ];

  linksAuthUser: Navigation[] = [
    { link: 'shedule', icon: 'view_agenda', label: 'Citas' },
    { link: 'pets', icon: 'pet_supplies', label: 'Mascotas' },
    { link: 'profile', icon: 'person', label: 'Perfil' },
  ];

  linksAuthAdmin: Navigation[] = [
    { link: 'users', icon: 'group', label: 'Usuarios' },
    { link: 'employees', icon: 'badge', label: 'Empleados' },
  ];

  links: Navigation[] = [];

  constructor(
    private dialogRef: MatDialog,
    private authService: AuthService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.authSubscription = this.authService.isLogged$.subscribe((isLogged) => {
      this.authState = isLogged;
      this.updateLinks();
    });

    this.updateLinks();
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

  updateLinks(): void {
    this.links = [...this.linksDefault];
    if (this.authService.isLogged()) {
      //si el usuario esta autenticado
      this.links = [...this.linksDefault, ...this.linksAuthUser]; //agrega los enlaces del usuario autenticado

      this.authState = true;
      const role = this.authService.getRole(); //obtiene el rol del usuario

      if (role === 'admin') {
        this.links = [...this.links, ...this.linksAuthAdmin]; //si el rol es admin agrega los enlaces de administrador
      }
    }
  }

  openDialogLogin(): void {
    const dialogRef: MatDialogRef<LoginComponent> = this.dialogRef.open(
      LoginComponent,
      {
        width: '25%',
        disableClose: true,
      }
    );
  }

  logout(): void {
    this.authService.logout();
    this.authState = false;
    this.updateLinks()
    this.router.navigate(['inicio/home']);
  }
}
