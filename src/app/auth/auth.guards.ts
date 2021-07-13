import { CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router, } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';

import { AuthService } from './auth.service';



@Injectable({ providedIn: 'root'})
export class AuthGards implements CanActivate {

  constructor( private authService: AuthService, private router: Router){}


    canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot):
    | Promise<boolean>
    | Observable<boolean>
    | boolean
    {
      return this.authService.user.pipe(
        take(1),
        map(user => {
        return !!user;
      }),
      tap(isAuth => {
        if(!isAuth){
          this.router.navigate(['/auth'])
        }
      })
    );
  }

}
