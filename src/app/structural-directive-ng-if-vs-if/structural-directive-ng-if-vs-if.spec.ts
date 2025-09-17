import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirectiveNgIfVsIf } from './structural-directive-ng-if-vs-if';

describe('StructuralDirectiveNgIfVsIf', () => {
  let component: StructuralDirectiveNgIfVsIf;
  let fixture: ComponentFixture<StructuralDirectiveNgIfVsIf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuralDirectiveNgIfVsIf]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuralDirectiveNgIfVsIf);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
