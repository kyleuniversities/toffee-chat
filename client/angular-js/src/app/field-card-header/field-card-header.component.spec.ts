import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldCardHeaderComponent } from './field-card-header.component';

describe('FieldCardHeaderComponent', () => {
  let component: FieldCardHeaderComponent;
  let fixture: ComponentFixture<FieldCardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FieldCardHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldCardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
