import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  template: `
    <h2>
      User Component
    </h2>
    <a [routerLink]="['/user']">User</a>
    <button (click)="onNavigate()">Go Home</button>
  `,
  styles: []
})
export class UserComponent {

  constructor(private router: Router) { }

  onNavigate(){
    this.router.navigate(['/']);
  }

}
