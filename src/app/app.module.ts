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
import { UsersModule } from './users/users.module';
import { EmployeesModule } from './employees/employees.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './auth/interceptors/auth.interceptor';




@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    SheduleModule,
    PetsModule,
    ProfileModule,
    UsersModule,
    EmployeesModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true} //se importa interceptor en el modulo principal
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
