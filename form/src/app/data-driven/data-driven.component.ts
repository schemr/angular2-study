import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'data-driven',
  templateUrl: './data-driven.component.html',
  styles: []
})
export class DataDrivenComponent {
  myForm: FormGroup;
  constructor(){
    this.myForm = new FormGroup({
      'username': new FormControl('Chris', Validators.required),
      'email': new FormControl('', [
          Validators.required, 
          Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
        ]), 
      'password': new FormControl('', Validators.required)
    });
  }
  onSubmit(){
    console.log(this.myForm)
  }
}
