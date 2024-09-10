import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteRightBodyComponent } from './site-right-body.component';

describe('SiteRightBodyComponent', () => {
  let component: SiteRightBodyComponent;
  let fixture: ComponentFixture<SiteRightBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteRightBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteRightBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
