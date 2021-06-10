import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';


//cambiar el locale de la app
import localeES from '@angular/common/locales/es';
import localeFR from '@angular/common/locales/fr';
import {registerLocaleData} from '@angular/common'

registerLocaleData(localeES);
registerLocaleData(localeFR);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    VentasModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide:LOCALE_ID, useValue:'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
