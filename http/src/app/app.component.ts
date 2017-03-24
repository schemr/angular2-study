import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  items: any[] = [];

  constructor(private httpService: HttpService){}

  asyncString = this.httpService.getData();

  onSubmit(username: string, email:string){
    this.httpService.sendData({username: username, email:email})
      .subscribe(
        data => console.log(data)
      )
  }
  onGetOwnData(){
    this.httpService.getOwnData()
      .subscribe(
        data => {
          const myArray = [];
          for (let key in data){
            myArray.push(data[key]);
          }
          this.items = myArray
        }
      )
  }
}
