import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const requiredRole = route.data['roles'] as string[]; //obtiene el rol requerido de la rutsa



    if (this.authService.isLogged()) {
      const userRole = this.authService.getRole(); //obtiene el rol del usuario logueado

      //verifica si el rol del usuario coincide con el rol requerido

      if(requiredRole && userRole && !requiredRole.includes(userRole)){
        this.router.navigate(['inicio/home']); //si no tiene el rol lo redirige a la pagina de inicio
        return false;
      }
      return true;
    } else {
      this.router.navigate(['404']);
      return false;
    }
  }
}
