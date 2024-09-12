import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteLeftBodyComponent } from './site-left-body.component';

describe('SiteLeftBodyComponent', () => {
  let component: SiteLeftBodyComponent;
  let fixture: ComponentFixture<SiteLeftBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteLeftBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteLeftBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
