import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, isDevMode, ApplicationRef, DoBootstrap } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  entryComponents: [
    AppComponent
  ]
})

export class AppModule implements DoBootstrap {

  constructor(
    private injector: Injector,
    private appRef: ApplicationRef
  ) { }

  ngDoBootstrap(): void {
    if (!isDevMode()) {
      const { injector } = this;
      const login = createCustomElement(LoginComponent, { injector });
      const register = createCustomElement(RegisterComponent, { injector });
      
      customElements.define('user-login', login);
      customElements.define('user-register', register);
    } else {
      this.appRef.bootstrap(AppComponent);
    }

  }

}
