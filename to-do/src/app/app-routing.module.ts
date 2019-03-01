import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AppComponent} from './app.component';
import {UsersComponent} from './users/users.component';
import {HomeComponent} from './home/home.component';

const routes:Routes = [
  { path:'home', component: HomeComponent },
  { path:'users', component: UsersComponent },
  { path:'**', redirectTo: 'home'}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule {
  
}