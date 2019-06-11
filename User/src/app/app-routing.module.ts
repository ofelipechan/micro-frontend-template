import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './default/page-not-found/page-not-found.component';
import { LoginModule } from './login/login.module';
import { IndexComponent } from './default/index/index.component';
import { RegisterModule } from './register/register.module';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'login', loadChildren: ()=> import('./login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    IndexComponent,
    PageNotFoundComponent
  ],
  imports: [
    LoginModule,
    RegisterModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
