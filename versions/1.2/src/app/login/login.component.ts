import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email : string = '';
  password : string = '';

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  }
  OnUserLogin(){
    if (this.email == ''){
      alert('please enter your email');
      return;
    }

    if (this.password == ''){
      alert('please enter your password');
      return;
    }

  this.auth.login(this.email, this.password);

  this.email = '';
  this.password = '';
  }
  OnSignInWithGoogle(){
    this.auth.googleSignIn();
  }
}
