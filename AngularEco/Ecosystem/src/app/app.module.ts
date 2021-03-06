import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { XyzComponent } from './xyz/xyz.component';
import { AbcComponent } from './abc/abc.component';
import { QrsComponent } from './qrs/qrs.component';

@NgModule({
  declarations: [
    AppComponent,
    XyzComponent,
    AbcComponent,
    QrsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
