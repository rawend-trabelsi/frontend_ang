import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent implements OnInit {
  user = new User(); 
  erreur: number = 0; 

  ngOnInit(): void {
  
  }
  constructor(private authService : AuthService,
    private router: Router) { }
    onLoggedin(){
      console.log(this.user);
       let isValidUser: Boolean = this.authService.SignIn(this.user);
      if (isValidUser)
      this.router.navigate(['/']);
      else
      //alert('Login ou mot de passe incorrecte!');
    this.erreur = 1;

}}
