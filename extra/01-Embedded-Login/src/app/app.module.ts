import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { ROUTES } from './app.routes';

import { AuthService } from './auth/auth.service';
import { CallbackComponent } from './callback/callback.component';
import { LockTestComponent } from './lockTest/lockTest.component';
import { OnlyLoggedInUsersGuard } from './guards/onlyLoggedInUsers.guard';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CallbackComponent, 
    LockTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [AuthService, OnlyLoggedInUsersGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
