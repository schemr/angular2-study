import { Component } from '@angular/core';

@Component({
  selector: 'template-driven',
  templateUrl: './template-driven.component.html'
})
export class TemplateDrivenComponent {
  onSubmit(){
    console.log("It works!")
  }
}
