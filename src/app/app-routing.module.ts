import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {UserComponent} from "./components/user/user.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {UsersColorsHomeListComponent} from "./components/users-colors-home-list/users-colors-home-list.component";


export const appRoutes: Routes = [
  {path: '', component: UsersColorsHomeListComponent},
  {path: 'user/:id', component: UserComponent},
  {path: '**', component: NotFoundComponent},
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
