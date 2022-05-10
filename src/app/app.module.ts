import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubReposComponent } from './Components/github-repos/github-repos.component';
import { GithubProfileComponent } from './Components/github-profile/github-profile.component';
import { GithubSearchUserComponent } from './Components/github-search-user/github-search-user.component';
import { NgxPaginationModule } from 'ngx-pagination';
import {  NgxSpinnerModule } from 'ngx-spinner';
import {BrowserAnimationsModule } from "@angular/platform-browser/animations"

@NgModule({
  declarations: [
    AppComponent,
    GithubReposComponent,
    GithubProfileComponent,
    GithubSearchUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    BrowserAnimationsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
