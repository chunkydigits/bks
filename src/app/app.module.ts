import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { ROUTES } from './app.routes';
import { AuthService } from './auth/auth.service';
import { IsUserLoggedInGuard } from './guards/userIsLoggedIn.guard';

import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FeedbackDetailComponent } from './feedback-detail/feedback-detail.component';
import { FeedbackCreateComponent } from './feedback-create/feedback-create.component';
import { FeedbackEditComponent } from './feedback-edit/feedback-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CallbackComponent,
    FeedbackComponent,
    FeedbackDetailComponent,
    FeedbackCreateComponent,
    FeedbackEditComponent
  ],
  imports: [
    BrowserModule,
    //HttpClientModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(
      ROUTES,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [AuthService, IsUserLoggedInGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
