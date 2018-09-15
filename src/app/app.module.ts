import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { WalletComponent } from './wallet/wallet.component';

@NgModule({
  declarations: [
    AppComponent,
    WalletComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
