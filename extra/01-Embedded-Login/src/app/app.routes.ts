import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';
import { LockTestComponent } from './lockTest/lockTest.component';

import { AuthService } from './auth/auth.service';


import { OnlyLoggedInUsersGuard } from './guards/onlyLoggedInUsers.guard';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'callback', component: CallbackComponent },
  { path: 'lockTest', component: LockTestComponent, canActivate: [OnlyLoggedInUsersGuard] },
  { path: '**', redirectTo: '' }
];
