import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorDetailesComponent } from './author-detailes.component';

describe('AuthorDetailesComponent', () => {
  let component: AuthorDetailesComponent;
  let fixture: ComponentFixture<AuthorDetailesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorDetailesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
