import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

import { Renderer } from '@angular/core';
import { Router, RouterOutlet } from "@angular/router";
import {
  RouterTestingModule
} from '@angular/router/testing';

class MockRouter { public navigate() { }; }

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        Renderer,
        { provide: Router, useClass: MockRouter },
        RouterOutlet
      ],
      imports: [RouterTestingModule]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));


});
