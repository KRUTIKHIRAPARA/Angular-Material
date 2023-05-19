import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottom-sheet-other-file',
  templateUrl: './bottom-sheet-other-file.component.html',
  styleUrls: ['./bottom-sheet-other-file.component.scss']
})
export class BottomSheetOtherFIleComponent {

  sheet:any;

  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOtherFIleComponent>){}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.afterDismissed().subscribe(() => {
      console.log('Bottom sheet has been dismissed.');
    });

    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
