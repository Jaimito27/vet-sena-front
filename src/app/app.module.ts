import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { SheduleModule } from './shedule/shedule.module';
import { PetsModule } from './pets/pets.module';
import { ProfileModule } from './profile/profile.module';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/pages/users.component';
import { BlokedComponent } from './users/components/bloked/bloked.component';
import { ActiveComponent } from './users/components/active/active.component';



@NgModule({
  declarations: [AppComponent, UsersComponent, BlokedComponent, ActiveComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    SheduleModule,
    PetsModule,
    ProfileModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
