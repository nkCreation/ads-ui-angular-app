import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdsUiAngularModule } from 'ads-ui-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AdsUiAngularModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
