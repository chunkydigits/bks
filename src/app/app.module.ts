import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FeedbackComponent } from './feedback/feedback.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
import { FeedbackDetailComponent } from './feedback-detail/feedback-detail.component';
import { FeedbackCreateComponent } from './feedback-create/feedback-create.component';
import { FeedbackEditComponent } from './feedback-edit/feedback-edit.component';

const appRoutes: Routes = [
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
  { path: '',
    redirectTo: '/feedbacks',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FeedbackComponent,
    FeedbackDetailComponent,
    FeedbackCreateComponent,
    FeedbackEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
