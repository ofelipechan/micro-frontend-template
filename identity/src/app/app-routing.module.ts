import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginModule } from './login/login.module';
import { RegisterComponent } from './register/register.component';
import { RegisterModule } from './register/register.module';

const routes: Routes = [
  { path: '', component: HomeComponent },
{ path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  declarations:[
    HomeComponent
  ],
  imports: [    
    LoginModule,
    RegisterModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
