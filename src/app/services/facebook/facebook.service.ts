import {Injectable} from '@angular/core';
import {FacebookService, InitParams} from 'ngx-facebook';

@Injectable( {
  providedIn: 'root'
} )
export class FbService {

  constructor(private fb: FacebookService) {
    const initParams: InitParams = {
      appId: '200057964281868',
      xfbml: true,
      version: 'v3.2'
    };

    fb.init(initParams);
  }

  public loginWithFacebook(): any {
    return this.fb.login();
  }

  public getLoginStatus() {
    return this.fb.getLoginStatus();
  }

  public logout() {
    return this.fb.logout();
  }
}

