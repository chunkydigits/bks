import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class IsUserLoggedInGuard implements CanActivate {

  constructor(private authService: AuthService) {}

  canActivate() {
    console.log("IsUserLoggedInGuard")
    if (this.authService.isAuthenticated()) { 
      return true;
    } else {
      window.alert("You don't have permission to view this page"); 
      return false;
    }
  }
}