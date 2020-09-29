import { Component, OnInit } from '@angular/core';

import { Validators, ValidatorFn, AbstractControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User = { email: '', password: '' }
  constructor(private router: Router, private fb: FormBuilder) { 
  }
  
  loginForm = this.fb.group({
    email: ['test@moveo.group', Validators.compose([Validators.required, Validators.email, this.checkEmail()])],
    password: ['123', Validators.compose([Validators.required, Validators.minLength(3), this.checkPassword()])],
  })

  ngOnInit(): void {
    const islogin = localStorage.getItem('login');
    if(islogin){
      this.router.navigateByUrl('list');
    }
  }

  submit(): void {
    alert(`${this.loginForm.value.email} Logged In`);
    this.user = this.loginForm.value;
    localStorage.setItem('login','true');
    this.router.navigateByUrl('list');
  }
  checkEmail(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const forbidden = control.value !== "test@moveo.group";
      return forbidden ? { forbiddenEmail: { value: control.value, valid: false } } : null;
    };
  }

  checkPassword(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const forbidden = control.value !== "123"
      return forbidden ? { forbiddenPassword: { value: control.value, valid: false } } : null;
    };
  }

}
