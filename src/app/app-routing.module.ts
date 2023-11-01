import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Error404PageComponent } from './shared/pages/404/error404-page/error404-page.component';
import { SheduleComponent } from './shedule/pages/shedule/shedule.component';
import { PetsComponent } from './pets/pages/pets.component';
import { ProfileComponent } from './profile/pages/profile/profile.component';

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
  },
  {
    path: 'pets',
    component: PetsComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
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
