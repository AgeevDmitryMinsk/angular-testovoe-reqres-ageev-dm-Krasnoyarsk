import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {UsersComponent} from "./components/users/users.component";
import {HttpClientModule} from "@angular/common/http";
import { ColorsComponent } from './components/colors/colors.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ColorsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
