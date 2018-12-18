import {Injectable} from '@angular/core';
import {FacebookService, InitParams, LoginOptions} from 'ngx-facebook';

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
    const loginOptions: LoginOptions = {
      scope: 'public_profile,email',
      redirect_uri: 'https://test-api.live.gbksoft.net/rest/v1/auth/facebook'
    };
    return this.fb.login(loginOptions);
  }

  public getLoginStatus() {
    return this.fb.getLoginStatus();
  }

  public logout() {
    return this.fb.logout();
  }
}

