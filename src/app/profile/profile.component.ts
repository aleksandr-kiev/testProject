import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {
  public user: object;
  constructor() {
    this.user = {
      "code": 201,
      "status": "success",
      "result": {
        "id": 1459,
        "username": "mamudar",
        "first_name": "Александр",
        "last_name": "Коваленко",
        "country": null,
        "city": null,
        "email": "mamudar@mail.ru",
        "image": "https://graph.facebook.com/2426637484032867/picture?width=200",
        "lat": null,
        "lon": null,
        "gender": "male",
        "accessToken": {
          "user_id": 1459,
          "token": "08ad932249dc147803e7b9442dd427d075574a34d5eea477e5d5093e9ff8f1e51459_v0QRxvyLl04OH28YWA0OYbT51YEiNcEJcINPgqkYXdrliD9o8iQtFF-gOJN",
          "expired_at": 1545142274
        },
        "created_at": 1545121796,
        "updated_at": 1545121796
      }
    };
  }

  ngOnInit() {
  }

}
