import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(
    private authServices: AuthService,
    private router: Router
  ) {}

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | boolean {
    if (!this.authServices.userIsAuthenticated) {
      this.router.navigateByUrl('/auth');
    }
    return this.authServices.userIsAuthenticated;
  }
  
}
