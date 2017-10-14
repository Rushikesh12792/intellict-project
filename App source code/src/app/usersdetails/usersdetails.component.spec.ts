import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { UsersdetailsComponent } from './usersdetails.component';
import { RouterTestingModule } from '@angular/router/testing';
import { UsersdetailsService } from './userdetails.service';
import { ClarityModule } from "clarity-angular";

import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';


import { MockBackend } from '@angular/http/testing';

describe('UsersdetailsComponent', () => {
  let component: UsersdetailsComponent;
  let fixture: ComponentFixture<UsersdetailsComponent>;
  let de: DebugElement;
  let fakeUsersDetailsService: UsersdetailsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ClarityModule, RouterTestingModule, HttpModule],
      declarations: [UsersdetailsComponent],
      providers: [UsersdetailsService,
        { provide: XHRBackend, useClass: MockBackend }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersdetailsComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fakeUsersDetailsService = fixture.debugElement.injector.get(UsersdetailsService);
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should return an Observable',
    inject([UsersdetailsService, XHRBackend], (usersdetailService, mockBackend) => {

      usersdetailService.getUsersDetails(1).subscribe((todo) => {
        expect(todo).toContain('todo');

        expect(todo).toBeTruthy();
      });

      usersdetailService.addNewTodo(1, 'delectus aut viam').subscribe((todo) => {

        expect(todo).toBeTruthy();
      });



      usersdetailService.updateTodo(1, true).subscribe((todo) => {

        expect(todo).toBeTruthy();
      });

    }));

});
