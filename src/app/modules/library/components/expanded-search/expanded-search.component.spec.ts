import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandedSearchComponent } from './expanded-search.component';

describe('ExpandedSearchComponent', () => {
  let component: ExpandedSearchComponent;
  let fixture: ComponentFixture<ExpandedSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpandedSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpandedSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
