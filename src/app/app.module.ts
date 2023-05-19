import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BadgeComponent } from './badge/badge.component';
import { MatModuleModule } from './mat-module/mat-module.module';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { BottomSheetOtherFIleComponent } from './bottom-sheet-other-file/bottom-sheet-other-file.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    BadgeComponent,
    BottomSheetComponent,
    BottomSheetOtherFIleComponent,
    ButtonComponent
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
