import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./routing/app-routing.module";
import { GlobalHeaderComponentModule, GlobalSidenavModule } from "@test-codegen-twelve/ui";
import { GlobalFooterModule } from "@test-codegen-twelve/ui";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { StoreModule } from "@ngrx/store";
import { StoreRouterConnectingModule, routerReducer } from "@ngrx/router-store";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule,
    AppRoutingModule, GlobalHeaderComponentModule, GlobalFooterModule,
    GlobalSidenavModule, StoreModule.forRoot({}), StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
