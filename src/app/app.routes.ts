import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';

import { FeedbackComponent } from './feedback/feedback.component';
import { FeedbackDetailComponent } from './feedback-detail/feedback-detail.component';
import { FeedbackCreateComponent } from './feedback-create/feedback-create.component';
import { FeedbackEditComponent } from './feedback-edit/feedback-edit.component';
import { IsUserLoggedInGuard } from './guards/userIsLoggedIn.guard';


export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'callback',
    component: CallbackComponent,
    canActivate: [IsUserLoggedInGuard]
  },
  {
    path: 'feedbacks',
    component: FeedbackComponent,
    data: { title: 'Feedback List' }
    //,
    //canActivate: [IsUserLoggedInGuard]
  },
  {
    path: 'feedback-details/:id',
    component: FeedbackDetailComponent,
    data: { title: 'Feedback Details' },
    canActivate: [IsUserLoggedInGuard]
  },
  {
    path: 'feedback-create',
    component: FeedbackCreateComponent,
    data: { title: 'Create Feedback' },
    canActivate: [IsUserLoggedInGuard]
  },
  {
    path: 'feedback-edit/:id',
    component: FeedbackEditComponent,
    data: { title: 'Edit Feedback' },
    canActivate: [IsUserLoggedInGuard]
  },
  { path: '**', redirectTo: '' }
];
