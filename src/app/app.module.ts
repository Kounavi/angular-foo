import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {SuccessAlertComponent} from './success-alert/success-alert.component';
import {WarningAlertComponent} from './warning-alert/warning-alert.component';
import {FormsModule} from "@angular/forms";
import {UsernameComponent} from './username/username.component';
import { PasswordComponent } from './password/password.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    UsernameComponent,
    PasswordComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
