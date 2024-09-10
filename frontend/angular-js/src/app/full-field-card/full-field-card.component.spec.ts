import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullFieldCardComponent } from './full-field-card.component';

describe('FullFieldCardComponent', () => {
  let component: FullFieldCardComponent;
  let fixture: ComponentFixture<FullFieldCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullFieldCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullFieldCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
