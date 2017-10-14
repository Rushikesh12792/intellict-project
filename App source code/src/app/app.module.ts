import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClarityModule } from "clarity-angular";
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UsersService } from './users/users.service';
import { UsersdetailsService } from './usersdetails/userdetails.service';

import { HttpModule, Http, RequestOptions, XSRFStrategy, CookieXSRFStrategy } from '@angular/http';
import { UsersdetailsComponent } from './usersdetails/usersdetails.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'userstodo', component: UsersdetailsComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersdetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    ClarityModule.forRoot(),
  ],
  providers: [UsersService,
    UsersdetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
