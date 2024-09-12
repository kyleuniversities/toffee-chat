import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileBoxContainerComponent } from './profile-box-container.component';

describe('ProfileBoxContainerComponent', () => {
  let component: ProfileBoxContainerComponent;
  let fixture: ComponentFixture<ProfileBoxContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileBoxContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileBoxContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
