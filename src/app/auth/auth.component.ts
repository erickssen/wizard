import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponse } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router){}

      error = null;
      @ViewChild('authForm') authForm!: NgForm;

      ngOnInit(){}

      onSubmit(form: NgForm){
        if(!form.valid){
          return;
        }
        const email = form.value.userData.email;
        const password = form.value.userData.password;
        let authObj: Observable<AuthResponse>

        authObj = this.authService.logIn(email, password);

        authObj.subscribe(res => {
          console.log('res authObs ---------->', res);

          this.router.navigate(['./label'])
        },
        err => {
          console.log('res error ----------->', err);
          this.error = err;
        }
      )
    }

  }
