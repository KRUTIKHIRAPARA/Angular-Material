import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSheetOtherFIleComponent } from './bottom-sheet-other-file.component';

describe('BottomSheetOtherFIleComponent', () => {
  let component: BottomSheetOtherFIleComponent;
  let fixture: ComponentFixture<BottomSheetOtherFIleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomSheetOtherFIleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomSheetOtherFIleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
