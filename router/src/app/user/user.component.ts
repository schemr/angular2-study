import { Subscription } from 'rxjs/Rx';
import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  template: `
    <h2>
      User Component
    </h2>
    <button (click)="onNavigate()">Go Home</button>
    <hr>
    {{id}}
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class UserComponent implements OnDestroy {
  private subscription: Subscription;
  id: string;

  constructor(private router: Router, private activedRoute: ActivatedRoute) { 
    this.subscription = activedRoute.params.subscribe(
      (param: any) => this.id = param['id']
    );
  }
  onNavigate(){
    // Fragment 의 경우도 queryPrams 와 같은형태로 사용 
    this.router.navigate(['/'], {queryParams:{'analytics':100}});
  }
  // 메모리 누수를 막기위한 subscribe destroy
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
