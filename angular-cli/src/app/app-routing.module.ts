import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route,RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegistComponent } from './components/regist/regist.component';
const routes:Routes=[
  {
    path:'',component:LoginComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'regist',component:RegistComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
