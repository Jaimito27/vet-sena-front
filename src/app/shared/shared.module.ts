import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthModule } from '../auth/auth.module';

import { MatDialogModule } from '@angular/material/dialog';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { OurServicesComponent } from './pages/our-services/our-services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { Error404PageComponent } from './pages/404/error404-page/error404-page.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    OurServicesComponent,
    ContactComponent,
    Error404PageComponent,
  ],
  imports: [CommonModule, RouterModule, AuthModule, MatDialogModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    OurServicesComponent,
    ContactComponent,
  ],
})
export class SharedModule {}
