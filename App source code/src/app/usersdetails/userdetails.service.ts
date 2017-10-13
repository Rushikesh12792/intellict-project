import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class UsersdetailsService {

  private userstodoUrl = 'https://jsonplaceholder.typicode.com/todos?userId='; // TODO!!! Change this when going live
 private addtodourl = "https://jsonplaceholder.typicode.com/todos";
    constructor (private http: Http) {
    }

    getUsersDetails(userid: number): Observable<string> {
      let headers = new Headers({
        'Content-Type': 'application/json'
      });
      let options = new RequestOptions({ body: '', headers: headers });

      return this.http.get(this.userstodoUrl  + userid, options)
        .map(this.extractData)
        .catch(this.handleError);
    }

    addNewTodo(userId, title) :Observable<string>{
            console.log('startProcessing service method called');
        
            let body = JSON.stringify({ title: title, userId: userId, completed: false});
            let headers = new Headers({
              'Content-Type': 'application/json'
            });
            let options = new RequestOptions({ body: body, headers: headers });
            console.log('URL =>', this.addtodourl);
            console.log('BODY =>', body);
            console.log('OPTIONS =>', options);
        
            return this.http.post(this.addtodourl, body, options)
              .map(this.extractData)
              .catch(this.handleError);
    }

    updateTodo(todoId, completed) :Observable<string>{
        console.log('startProcessing service method called');
    
        let body = JSON.stringify({ completed: completed});
        let headers = new Headers({
          'Content-Type': 'application/json'
        });
        let options = new RequestOptions({ body: body, headers: headers });
        console.log('URL =>', this.addtodourl);
        console.log('BODY =>', body);
        console.log('OPTIONS =>', options);
    
        return this.http.put(this.addtodourl + '/' + todoId, body, options)
          .map(this.extractData)
          .catch(this.handleError);
}

    private extractData(res: Response) {
      let body = res.json();
      // console.log('BODY:', body);
      return body || { };
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
