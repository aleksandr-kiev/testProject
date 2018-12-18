import { Component, ViewEncapsulation } from '@angular/core';
import {FbService} from '../services/facebook/facebook.service';
import {UserService} from '../services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {

  constructor( private fb: FbService, private userService: UserService) { }

  submitLogin() {
    // Login with Facebook
    this.userService.userLogin();
  }

  logout() {
    // Logout
    this.fb.logout();
  }

}
