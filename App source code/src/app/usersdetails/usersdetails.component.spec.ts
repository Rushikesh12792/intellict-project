import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersdetailsComponent } from './usersdetails.component';

describe('UsersdetailsComponent', () => {
  let component: UsersdetailsComponent;
  let fixture: ComponentFixture<UsersdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
