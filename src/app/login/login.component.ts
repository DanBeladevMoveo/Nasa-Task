import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User = {email:'',password:''}
  loginForm: FormGroup;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.email,
        this.checkEmail()
      ]),
      password: new FormControl(this.user.password, [
        Validators.required,
        Validators.minLength(3),
        this.checkPassword()
      ]),

    })
  }
submit(): void {
  if(this.loginForm.controls.email.errors){
    const {email, required, forbiddenEmail} = this.loginForm.controls.email.errors;
    if(required === true)
    {
      alert('Insert an Email please');
    }
    else if(email === true)
    {
      alert('please insert valid email');
    }
    else if(forbiddenEmail.valid === false)
    {
      alert('Not Correct Email');
    }
  }
   else if(this.loginForm.controls.password.errors){    
    const {required, minlength, forbiddenPassword} = this.loginForm.controls.password.errors;
    if(required === true)
    {
      alert('Insert Password please');
    }
    else if(minlength)
    {
      if(minlength.actualLength< minlength.requiredLength) 
      alert('Password must be at least 3 characters');
    }
    else if(forbiddenPassword.valid === false)
    {
      alert('Not Correct Password');
    }
  }
  else {
    alert('Logged In');
    this.router.navigateByUrl('list');
  }
  this.user= this.loginForm.value;
}
checkEmail(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const forbidden = control.value !== "test@moveo.group";
      return forbidden ? {forbiddenEmail: {value: control.value, valid: false}} : null;
    };
}

checkPassword(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = control.value !== "123"
    return forbidden ? {forbiddenPassword: {value: control.value, valid: false}} : null;
  };
}

}
