import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private httpService: HttpService){}

  onSubmit(username: string, email:string){
    this.httpService.sendData({username: username, email:email})
      .subscribe(
        data => console.log(data)
      )
  }
}
