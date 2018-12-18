import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { FbService } from '../facebook/facebook.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private loginUrl: string;

  constructor(private http: HttpClient, private fb: FbService) {
    this.loginUrl = 'https://test-api.live.gbksoft.net/rest/v1/user/login/facebook';
  }

  public userLogin() {
    // Get Facebook Auth;
    this.fb.loginWithFacebook().then(response => {
      console.log(response)
      let formData: FormData = new FormData();
      formData.append('code', response.authResponse.accessToken);

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/x-www-form-urlencoded'
        })
      };
      const httpParams = new HttpParams().set('code', response.authResponse.accessToken);

      /*this.http.post<any>('https://test-api.live.gbksoft.net/rest/v1/user/login/facebook',
        {code: response.authResponse.accessToken},
        httpOptions)
        .subscribe(res => {
          console.log(res);
        });*/

      this.http.post<any>(this.loginUrl, httpParams, httpOptions)
        .subscribe(res => {
          console.log(res);
        });
    });
  }
  public currentUser() {
    return this.http.get('https://test-api.live.gbksoft.net/rest/v1/user/current');
  }
  public testAuth() {
    this.http.get<any>('https://www.facebook.com/dialog/oauth?client_id=1637129439866047&scope=public_profile,email&redirect_uri=https://test-api.live.gbksoft.net/rest/v1/auth/facebook')
      .subscribe(res => {
        console.log(res + 'sdasd');
      });
  }
}
