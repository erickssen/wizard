import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { catchError, tap } from 'rxjs/operators'
import { throwError, Subject, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

import { User } from './user.model';


export interface AuthResponse{
    'idToken': string;
    'email': string;
    'refreshToken': string;
    'expiresIn': string;
    'localId': string;
    'registered?': boolean;
  }

@Injectable({ providedIn: 'root'})
export class AuthService {

  constructor(private http: HttpClient, private router: Router){}

  //use BehaviorSubject to have access to user previously emitted(when logged in)
  user = new BehaviorSubject<User>(null as any);
  private tokenExpirationTimer: any;

  logIn(email: string, password: string){
    return this.http.post<AuthResponse>
    ('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBWzSIR5WU9TVzJaZTbM98NMB4z68O9Fus',
    {
      email:email,
      password:password,
      returnSecureToken: true
    })
    .pipe(catchError(this.handleError),
      tap(res => {
        this.handleAuthenticaton(
          res.email,
          res.localId,
          res.idToken,
          +res.expiresIn
        )
      }))
  }

  logout(){
    this.user.next(null as any);
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    if(this.tokenExpirationTimer){
      this.tokenExpirationTimer = null;
    }
  }

  private handleAuthenticaton(
    email:string,
    localId:string,
    idToken:string,
    expiresIn:number){
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, localId, idToken, expirationDate);
    this.user.next(user);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  private handleError(errorRes: HttpErrorResponse){
    return throwError(errorRes.error.error.message);
  }

}
