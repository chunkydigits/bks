import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';

import { FeedbackComponent } from './feedback/feedback.component';
import { FeedbackDetailComponent } from './feedback-detail/feedback-detail.component';
import { FeedbackCreateComponent } from './feedback-create/feedback-create.component';
import { FeedbackEditComponent } from './feedback-edit/feedback-edit.component';


export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'feedbacks',
    component: FeedbackComponent, 
    data: { title: 'Feedback List' }
  },
  {
    path: 'feedback-details/:id',
    component: FeedbackDetailComponent,
    data: { title: 'Feedback Details' }
  },
  {
    path: 'feedback-create',
    component: FeedbackCreateComponent,
    data: { title: 'Create Feedback' }
  },
  {
    path: 'feedback-edit/:id',
    component: FeedbackEditComponent,
    data: { title: 'Edit Feedback' }
  },
  { path: 'callback', component: CallbackComponent },
  { path: '**', redirectTo: '' }
];
