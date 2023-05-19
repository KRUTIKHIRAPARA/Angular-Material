import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BadgeComponent } from './badge/badge.component';
import { MatModuleModule } from './mat-module/mat-module.module';

@NgModule({
  declarations: [
    AppComponent,
    BadgeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
