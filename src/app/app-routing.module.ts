import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { OurServicesComponent } from './shared/pages/our-services/our-services.component';
import { ContactComponent } from './shared/pages/contact/contact.component';
import { Error404PageComponent } from './shared/pages/404/error404-page/error404-page.component';
import { SheduleComponent } from './shedule/pages/shedule/shedule.component';
import { PetsComponent } from './pets/pages/pets.component';
import { ProfileComponent } from './profile/pages/profile/profile.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'contacto',
    component: ContactComponent,
  },
  {
    path: 'servicios',
    component: OurServicesComponent,
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
