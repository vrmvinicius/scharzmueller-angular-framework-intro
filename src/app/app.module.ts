import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HobbyComponent } from './hobby/hobby.component';
import { UsernameComponent } from './username/username.component';
import { UserComponent } from './user/user.component';
import { InfoComponent } from './info/info.component';
import { AccountComponent } from './account/account.component';
import { BlogComponent } from './blog/blog.component';
import { RouterModule } from '@angular/router';

const appRoutes = [
   { path: '', component: UserComponent },
   { path: 'blog', component: BlogComponent },
   { path: 'account', component: AccountComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    UsernameComponent,
    HobbyComponent,
    UserComponent,
    InfoComponent,
    AccountComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
