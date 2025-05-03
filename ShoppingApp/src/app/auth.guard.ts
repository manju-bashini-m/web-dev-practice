import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const _router = inject(Router);
  const logedIn = sessionStorage.getItem('islogedin');
  if (logedIn === 'false') {
    alert('Please Login, Redirecting to login page!!');
    _router.navigate(['login']);
    return false;
  }
  return true;
};
