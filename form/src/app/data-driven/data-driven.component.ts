import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'data-driven',
  templateUrl: './data-driven.component.html',
  styles: []
})
export class DataDrivenComponent {
  myForm: FormGroup;
  genders = [
    'male',
    'female'
  ]
  constructor(){
    this.myForm = new FormGroup({
      'userData' : new FormGroup({
        'username': new FormControl('Chris', Validators.required),
        'email': new FormControl('', [
            Validators.required, 
            Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
        ])
      }),
      'password': new FormControl('', Validators.required),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([
          new FormControl('Cooking', Validators.required)
      ])
    });
  }
  onSubmit(){
    console.log(this.myForm)
  }
  onAddHobby(){
    (<FormArray>this.myForm.get('hobbies')).push(new FormControl('', Validators.required));
  }
}
