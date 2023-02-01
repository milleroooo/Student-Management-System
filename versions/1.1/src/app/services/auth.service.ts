import { Injectable } from '@angular/core';
import { user } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { GoogleAuthProvider, FacebookAuthProvider } from '@angular/fire/auth';
import { ToastService } from './toastr.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth: AngularFireAuth, private router: Router, private toastr: ToastService) { }
  message: string = ''

  //Login notifications

  OnShowLoginSuccess(){
   this.toastr.showLoginSucces();
  }

  OnShowLoginError(){
    this.toastr.showLoginError();
  }

  OnShowLoginInfo(){
    this.toastr.showLoginInfo();
  }

  //Register notifications

   OnShowRegistrationSuccess(){
    this.toastr.showRegistrationSucces();
   }

   OnShowRegistrationWarning(){
     this.toastr.showRegistrationWarning();
  }

  //Logout notification

  OnShowUserLoggedOutInfo(){
    this.toastr.showUserLoggedOutInfo();
 }

   //Forgot password notification

   OnShowForgotPasswordInfo(){
    this.toastr.showForgotPasswordInfo();
 }

 OnShowForgotPasswordError(){
  this.toastr.showForgotPasswordError();
}
  //login method

  login(email : string, password : string): void {
    this.fireauth.signInWithEmailAndPassword(email,password).then( res => {
        localStorage.setItem('token','true');

        if(res.user?.emailVerified == true){
          this.OnShowLoginSuccess();
          this.router.navigate(['dashboard']);
        } else{
          this.router.navigate(['login']);
          this.OnShowLoginInfo();
        }

    }, err => {
        this.OnShowLoginError();
        this.router.navigate(['/login']);
    })
  }

 //register method

 register(email : string, password : string) {
  this.fireauth.createUserWithEmailAndPassword(email, password).then( res => {
    this.OnShowForgotPasswordInfo();
    this.OnShowRegistrationSuccess();
    this.sendEmailForVarification(res.user);
    this.router.navigate(['/login']);
  }, err => {
    this.OnShowRegistrationWarning();
    this.router.navigate(['/register']);
  })
}

 //sign out method

  logout() {
    this.fireauth.signOut().then(() =>{
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
      this.OnShowUserLoggedOutInfo();
    }, err => {
      alert(err.message);
    })
  }

  //forgot password method

 forgotPassword(email : string){
    this.fireauth.sendPasswordResetEmail(email).then(() => {
      this.OnShowForgotPasswordInfo();
      this.router.navigate(['/login']);
    }, err => {
      this.OnShowForgotPasswordError();
    })
 }


  //email varification
  sendEmailForVarification(user : any) {
    console.log(user);
    user.sendEmailVerification().then((res : any) => {
      this.router.navigate(['/login']);
    }, (err : any) => {
      this.OnShowForgotPasswordError();
    })
  }

    //sign in with google
    googleSignIn() {
      return this.fireauth.signInWithPopup(new GoogleAuthProvider).then(res => {

        this.router.navigate(['/dashboard']);
        localStorage.setItem('token',JSON.stringify(res.user?.uid));
        this.OnShowRegistrationSuccess();

      }, err => {
        this.OnShowRegistrationWarning();
      })
    }
}
