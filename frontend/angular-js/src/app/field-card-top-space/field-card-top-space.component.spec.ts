import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldCardTopSpaceComponent } from './field-card-top-space.component';

describe('FieldCardTopSpaceComponent', () => {
  let component: FieldCardTopSpaceComponent;
  let fixture: ComponentFixture<FieldCardTopSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FieldCardTopSpaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldCardTopSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
