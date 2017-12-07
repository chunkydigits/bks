import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { ROUTES } from './app.routes';

import { AuthService } from './components/auth/auth/auth.service';

import { CallbackComponent } from './components/auth/callback/callback.component';
import { LockTestComponent } from './components/lockTest/lockTest.component';
import { FeedbackComponent } from './components/feedback/feedback/feedback.component';
import { FeedbackDetailComponent } from './components/feedback/feedback-detail/feedback-detail.component';
import { FeedbackCreateComponent } from './components/feedback/feedback-create/feedback-create.component';
import { FeedbackEditComponent } from './components/feedback/feedback-edit/feedback-edit.component';

import { OnlyLoggedInUsersGuard } from './guards/onlyLoggedInUsers.guard';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CallbackComponent, 
    FeedbackComponent,
    FeedbackDetailComponent,
    FeedbackCreateComponent,
    FeedbackEditComponent,
    LockTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [AuthService, OnlyLoggedInUsersGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
