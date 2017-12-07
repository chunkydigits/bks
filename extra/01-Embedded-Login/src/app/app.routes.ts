import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CallbackComponent } from './components/auth/callback/callback.component';
import { LockTestComponent } from './components/lockTest/lockTest.component';

import { AuthService } from './components/auth/auth/auth.service';


import { OnlyLoggedInUsersGuard } from './guards/onlyLoggedInUsers.guard';
import { FeedbackComponent } from './components/feedback/feedback/feedback.component';
import { FeedbackDetailComponent } from './components/feedback/feedback-detail/feedback-detail.component';
import { FeedbackCreateComponent } from './components/feedback/feedback-create/feedback-create.component';
import { FeedbackEditComponent } from './components/feedback/feedback-edit/feedback-edit.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'callback',
    component: CallbackComponent
  },
  {
    path: 'feedbacks',
    component: FeedbackComponent,
    data: { title: 'Feedback List' }
  },
  {
    path: 'feedback-details/:id',
    component: FeedbackDetailComponent,
    data: { title: 'Feedback Details' },
    canActivate: [OnlyLoggedInUsersGuard]
  },
  {
    path: 'feedback-create',
    component: FeedbackCreateComponent,
    data: { title: 'Create Feedback' },
    canActivate: [OnlyLoggedInUsersGuard]
  },
  {
    path: 'feedback-edit/:id',
    component: FeedbackEditComponent,
    data: { title: 'Edit Feedback' },
    canActivate: [OnlyLoggedInUsersGuard]
  },
  {
    path: 'lockTest', component: LockTestComponent,
    canActivate: [OnlyLoggedInUsersGuard]
  },
  { path: '**', redirectTo: '' }
];
