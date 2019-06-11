import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  @Output() actions: EventEmitter<string> = new EventEmitter();

  submitted = false;

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  get formControls() { return this.loginForm.controls}

  btnRegister = () => this.actions.emit('register');

  constructor(
  ) {    
  }


  ngOnInit(){
    
  }

  onSubmit(){
    this.submitted = true;
  }

}
