import { Component } from '@angular/core';
import { AuthService } from 'app/_services/auth.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { JwtHelper } from 'angular2-jwt';
import { User } from 'app/_models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  jwtHelper: JwtHelper = new JwtHelper();

  constructor(private authService: AuthService) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    const user:User = JSON.parse(localStorage.getItem('user'));
    if(token) {
      this.authService.decodedToken = this.jwtHelper.decodeToken(token);
    }
    if(user) {
      this.authService.currentUser = user;
      this.authService.changeMemberPhoto(user.photoUrl);
    }
  }
}
