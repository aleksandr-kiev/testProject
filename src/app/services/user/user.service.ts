import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
      let formData: FormData = new FormData();
      formData.append('code', response.authResponse.accessToken);

      this.http.post<any>(this.loginUrl, formData)
        .subscribe(res => {
          console.log(res);
        });
    });
  }
  public currentUser() {
    return this.http.get('https://test-api.live.gbksoft.net/rest/v1/user/current');
  }
}
