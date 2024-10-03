import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Error404PageComponent } from './shared/pages/404/error404-page/error404-page.component';
import { SheduleComponent } from './shedule/pages/shedule/shedule.component';
import { PetsComponent } from './pets/pages/pets/pets.component';
import { ProfileComponent } from './profile/pages/profile/profile.component';
import { UsersComponent } from './users/pages/users.component';
import { EmployeesComponent } from './employees/pages/employees/employees.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { PetsAdminComponent } from './pets/pages/pets-admin/pets-admin.component';


const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./shared/shared.module').then((m) => m.SharedModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'shedule',
    component: SheduleComponent,
    canActivate: [AuthGuard],
    data: {roles: ['user']}
  },
  {
    path: 'pets',
    component: PetsComponent,
    canActivate: [AuthGuard],
    data: {roles: ['user']}
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    data: {roles: ['user', 'admin']}
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuard],
    data: {roles: ['admin']}
  },
  {
    path: 'employees',
    component: EmployeesComponent,
    canActivate: [AuthGuard],
    data: {roles: ['admin']}
  },
  {
    path: 'pets-admin',
    component: PetsAdminComponent,
    canActivate: [AuthGuard],
    data: {roles: ['admin']}
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: Error404PageComponent,
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
