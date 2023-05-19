import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BadgeComponent } from './badge/badge.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { ButtonComponent } from './button/button.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
