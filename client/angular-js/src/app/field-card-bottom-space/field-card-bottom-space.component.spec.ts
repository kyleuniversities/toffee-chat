import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldCardBottomSpaceComponent } from './field-card-bottom-space.component';

describe('FieldCardBottomSpaceComponent', () => {
  let component: FieldCardBottomSpaceComponent;
  let fixture: ComponentFixture<FieldCardBottomSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FieldCardBottomSpaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldCardBottomSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
