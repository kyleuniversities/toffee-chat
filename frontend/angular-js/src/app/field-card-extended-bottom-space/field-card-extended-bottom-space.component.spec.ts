import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldCardExtendedBottomSpaceComponent } from './field-card-extended-bottom-space.component';

describe('FieldCardExtendedBottomSpaceComponent', () => {
  let component: FieldCardExtendedBottomSpaceComponent;
  let fixture: ComponentFixture<FieldCardExtendedBottomSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FieldCardExtendedBottomSpaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldCardExtendedBottomSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
