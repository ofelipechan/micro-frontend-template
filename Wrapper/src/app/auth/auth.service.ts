import { User } from './user.interface';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn: boolean = false;
  // private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private router: Router,
  ) { }

  get isLoggedIn() {
    if (this.loggedIn)
      return true;
    else {
      const storedStatus = sessionStorage.getItem('isLoggedIn');
      if (storedStatus == 'true')
        return true;
    }
    // return this.loggedIn.asObservable().pipe(
    //   take(1),
    //   map((status: boolean) => {
    //     if (!status) {
    //       const storedStatus = sessionStorage.getItem('isLoggedIn');
    //       if (storedStatus == 'true') 
    //         return true;
    //     } else
    //       return status
    //   })
    // ).toPromise();
  }

  login(user: User) {
    if (user.email && user.password) {
      this.loggedIn = true;
      sessionStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/']);
    }
  }

  logout() {
    this.loggedIn = false;
    sessionStorage.clear()
    this.router.navigate(['/login'])
  }
}
