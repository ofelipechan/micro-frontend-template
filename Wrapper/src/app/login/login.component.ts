import { Router } from '@angular/router';
import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    const isLogged = this.authService.isLoggedIn;
    if (isLogged) {
      this.router.navigate(['/']);
    }
  }

  setActionEvent(action) {
    console.log(action)

  }

  login(credentials) {
    this.authService.login(credentials);
  }

}
