import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styles: []
})
export class SigninComponent implements OnInit {
  myForm: FormGroup;
  error: false;
  errorMessage = '';

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit():any {
    this.myForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSignin(){
    this.authService.signinUser(this.myForm.value);
  }


}
