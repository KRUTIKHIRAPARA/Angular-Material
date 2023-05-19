import { Component, Input } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { BottomSheetOtherFIleComponent } from '../bottom-sheet-other-file/bottom-sheet-other-file.component';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss']
})
export class BottomSheetComponent {

  @Input() sheet: BottomSheetOtherFIleComponent | undefined;

  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOtherFIleComponent);
    

  }
}

