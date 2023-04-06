import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {UsersComponent} from "./components/users/users.component";
import {HttpClientModule} from "@angular/common/http";
import {ColorsComponent} from './components/colors/colors.component';
import {UserComponent} from './components/user/user.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { UsersColorsHomeListComponent } from './components/users-colors-home-list/users-colors-home-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ColorsComponent,
    UserComponent,
    NotFoundComponent,
    UsersColorsHomeListComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
