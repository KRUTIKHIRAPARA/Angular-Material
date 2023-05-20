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
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { CardComponent } from './card/card.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { FormsModule } from '@angular/forms';
import { ChipsComponent } from './chips/chips.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { DialogComponent } from './dialog/dialog.component';
import { TestComponent } from './dialog/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    BadgeComponent,
    BottomSheetComponent,
    BottomSheetOtherFIleComponent,
    ButtonComponent,
    ButtonToggleComponent,
    CardComponent,
    CheckboxComponent,
    ChipsComponent,
    DatePickerComponent,
    DialogComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
