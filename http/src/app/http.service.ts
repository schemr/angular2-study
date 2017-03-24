import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  getData(){
    return this.http.get('https://angular2-test-ed374.firebaseio.com/title.json')
      .map((response: Response) => response.json());
  }
}
