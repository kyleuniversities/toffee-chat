import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteMiddleBodyComponent } from './site-middle-body.component';

describe('SiteMiddleBodyComponent', () => {
  let component: SiteMiddleBodyComponent;
  let fixture: ComponentFixture<SiteMiddleBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteMiddleBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteMiddleBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
