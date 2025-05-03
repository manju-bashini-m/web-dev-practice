import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  isLoggedIn(): boolean {
    return sessionStorage.getItem('islogedin') === 'true';
  }
  logout(): void {
    sessionStorage.setItem('islogedin', 'false');
    this.router.navigate(['login']);
  }
}
