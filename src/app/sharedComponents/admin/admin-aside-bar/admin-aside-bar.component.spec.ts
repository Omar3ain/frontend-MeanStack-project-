import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAsideBarComponent } from './admin-aside-bar.component';

describe('AdminAsideBarComponent', () => {
  let component: AdminAsideBarComponent;
  let fixture: ComponentFixture<AdminAsideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAsideBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAsideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
