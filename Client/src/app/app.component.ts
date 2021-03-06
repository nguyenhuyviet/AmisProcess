import { Component } from '@angular/core';
import { User, Role } from './models';
import { Router } from '@angular/router';
import { AuthenticationService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUser: User
  constructor(
    private router:Router,
    private authenticationService: AuthenticationService
  ){
    this.authenticationService.currentUser.subscribe(x=> this.currentUser = x);
  //  console.log(this.currentUser)
  }

  get isAdmin(){
    return this.currentUser && this.currentUser.role == Role.Admin;
  }

  get isEmployee(){
    return this.currentUser && this.currentUser.role == Role.Employee;
  }


  logout(){
    this.authenticationService.logout();
    this.router.navigate['/login'];
  }
  
}
