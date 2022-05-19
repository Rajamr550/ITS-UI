import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidateComponent } from './candidate/candidate.component';
import { LoginComponent } from './login/login.component';
import { TechComponent } from './tech/tech.component';
import { HrComponent } from './hr/hr.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidateComponent,
    LoginComponent,
    TechComponent,
    HrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
