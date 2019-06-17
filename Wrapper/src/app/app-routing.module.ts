import { AuthGuard } from './auth/auth.guard';
import { SidenavComponent } from './default/sidenav/sidenav.component';
import { LoginLayoutComponent } from './layouts/login-layout.component';
import { PageNotFoundComponent } from './default/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeLayoutComponent } from './layouts/home-layout.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)  }
    ]
  },
  {
    path: '', 
    component: LoginLayoutComponent, 
    children: [
      { path: 'login', loadChildren: () => import("./login/login.module").then(m => m.LoginModule) },
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    PageNotFoundComponent,
    LoginLayoutComponent,
    HomeLayoutComponent,
    SidenavComponent
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthGuard
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
