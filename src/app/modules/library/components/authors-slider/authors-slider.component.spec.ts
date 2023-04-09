import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsSliderComponent } from './authors-slider.component';

describe('AuthorsSliderComponent', () => {
  let component: AuthorsSliderComponent;
  let fixture: ComponentFixture<AuthorsSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorsSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
