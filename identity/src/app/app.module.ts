import { createCustomElement } from '@angular/elements';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, DoBootstrap, Injector, ApplicationRef, isDevMode } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
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

  ngDoBootstrap() {
    if (!isDevMode()) {
      const { injector } = this;
      const login = createCustomElement(LoginComponent, { injector });
      customElements.define('identity-login', login);
    } else {
      this.appRef.bootstrap(AppComponent);
    }
  }

}
