import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ClarityModule } from "clarity-angular";

import {
    HttpModule,
    Http,
    Response,
    ResponseOptions,
    XHRBackend
} from '@angular/http';

import { MockBackend } from '@angular/http/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
    //   let component: UsersComponent;
    //   let fixture: ComponentFixture<UsersComponent>;
    let de: DebugElement;
    let fakeUsersService: UsersService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule, ClarityModule],
            providers: [UsersService,
                { provide: XHRBackend, useClass: MockBackend }]
        })
            .compileComponents();
    }));


    // });



    it('should return an Observable',
        inject([UsersService, XHRBackend], (usersService, mockBackend) => {

            const mockResponse = {
                data: [
                    {
                        id: 1,
                        name: 'Leanne Graham',
                        username: 'Bret',
                        email: 'Sincere@april.biz',
                        address: {
                            street: 'Kulas Light',
                            suite: 'Apt. 556',
                            city: 'Gwenborough',
                            zipcode: '92998-3874',
                            geo: {
                                lat: '-37.3159',
                                lng: '81.1496'
                            }
                        },
                        phone: '1-770-736-8031 x56442',
                        website: 'hildegard.org',
                        company: {
                            name: 'Romaguera-Crona',
                            catchPhrase: 'Multi-layered client-server neural-net',
                            bs: 'harness real-time e-markets'
                        }
                    }

                ]
            };

            mockBackend.connections.subscribe((connection) => {
                connection.mockRespond(new Response(new ResponseOptions({
                    body: JSON.stringify(mockResponse)
                })));
            });

            usersService.getUsers().subscribe((users) => {

                // expect(users.length).toBe(10);
            });


        }));
});
// });
