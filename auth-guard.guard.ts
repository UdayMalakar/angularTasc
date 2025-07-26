// auth.guard.ts
import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthServiceService } from './services/auth-service.service';
import { Router } from '@angular/router';
export const authGuardGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthServiceService);
  const router = inject(Router);

  if (authService.isLoggedInVar) {
    return true;
  } else {
    alert('Please login first!');
    router.navigate(['/login']);
    return false;
  }
};


export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthServiceService);

  const role =authService.getRole();

  if (role !== 'ADMIN') {
    alert("Access denied! Admins only.");
    router.navigate(['/']);
    return false;
  }

  return true;
};

export const userGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
 const authService = inject(AuthServiceService);

  const role =authService.getRole();

  if (role !== 'USER') {
    alert('User access only!');
    router.navigate(['/']);
    return false;
  }

  return true;
};
