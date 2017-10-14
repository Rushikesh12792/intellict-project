import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { HttpModule, Http } from '@angular/http';
import { UsersComponent } from './users.component';
import { UsersService } from './users.service';
import { ClarityModule } from "clarity-angular";

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let de: DebugElement;
  let fakeUsersService: UsersService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ClarityModule, RouterTestingModule, HttpModule],
      declarations: [UsersComponent],
      providers: [UsersService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fakeUsersService = fixture.debugElement.injector.get(UsersService);
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('getUsers()', () => {

    it('should return an Observable<string>', () => {
      // test goes here
    });
  });
});
