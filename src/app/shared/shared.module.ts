import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { OurServicesComponent } from './pages/our-services/our-services.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    OurServicesComponent,
    ContactComponent],
  imports: [CommonModule, RouterModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    OurServicesComponent,
    ContactComponent
  ]
})
export class SharedModule {}
