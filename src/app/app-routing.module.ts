import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BadgeComponent } from './badge/badge.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { ButtonComponent } from './button/button.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { CardComponent } from './card/card.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ChipsComponent } from './chips/chips.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { DialogComponent } from './dialog/dialog.component';

const routes: Routes = [
  {
    path:'badge',
    component:BadgeComponent
  },
  {
    path:'bottom-sheet',
    component:BottomSheetComponent
  },
  {
    path:'button',
    component:ButtonComponent
  },
  {
    path:'button-toggle',
    component:ButtonToggleComponent
  },
  {
    path:'card',
    component:CardComponent
  },
  {
    path:'checkbox',
    component:CheckboxComponent
  },
  {
    path:'chips',
    component:ChipsComponent
  },
  {
    path:'date-picker',
    component:DatePickerComponent
  },
  {
    path:'dialog',
    component:DialogComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
