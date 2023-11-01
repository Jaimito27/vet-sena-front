import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { OurServicesComponent } from './pages/our-services/our-services.component';
import { ContactComponent } from './pages/contact/contact.component';
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
