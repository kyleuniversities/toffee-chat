import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldCardBodyComponent } from './field-card-body.component';

describe('FieldCardBodyComponent', () => {
  let component: FieldCardBodyComponent;
  let fixture: ComponentFixture<FieldCardBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FieldCardBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldCardBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
