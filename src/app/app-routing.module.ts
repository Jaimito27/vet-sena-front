import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { OurServicesComponent } from './shared/pages/our-services/our-services.component';
import { ContactComponent } from './shared/pages/contact/contact.component';
import { Error404PageComponent } from './shared/pages/404/error404-page/error404-page.component';
import { SheduleComponent } from './shedule/components/shedule/shedule.component';

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
    component: SheduleComponent
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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
