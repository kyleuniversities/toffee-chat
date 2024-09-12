import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldCardLiftedSpaceComponent } from './field-card-lifted-space.component';

describe('FieldCardLiftedSpaceComponent', () => {
  let component: FieldCardLiftedSpaceComponent;
  let fixture: ComponentFixture<FieldCardLiftedSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FieldCardLiftedSpaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldCardLiftedSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
