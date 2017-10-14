import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UsersService {

  private usersUrl = 'https://jsonplaceholder.typicode.com/users'; // TODO!!! Change this when going live

  constructor(private http: Http) {
  }

  getUsers(): Observable<string> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({ body: '', headers: headers });

    return this.http.get(this.usersUrl, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    // console.log('BODY:', body);
    return body || {};
  }

  handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error('CAUGHT AN ERROR:', errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
