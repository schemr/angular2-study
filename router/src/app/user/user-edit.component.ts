import { Observable } from 'rxjs/Rx';
import { ComponentCanDeactivate } from './user-edit.guard';
import { CanDeactivate, Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-edit',
  template: `
    <h3>User Edit</h3>
    <button (click)="done = ture">Done</button>
    <button class="btn btn-alert" (click)="onNavigate()">Go Home</button>
  `,
  styles: []
})
export class UserEditComponent implements ComponentCanDeactivate {
  done = false;
  constructor(private router: Router) { }
  onNavigate(){
    this.router.navigate(['/']);
  }
  canDeactivate(): Observable<boolean> | boolean{
    if(!this.done){
      return confirm('Do you want to leave?');
    }
    return true;
  }

}
