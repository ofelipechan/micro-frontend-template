import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  @Output() actions: EventEmitter<string> = new EventEmitter();
  @Output() credentials: EventEmitter<object> = new EventEmitter();

  submitted: boolean = false;
  loading: boolean = false;

  loginForm = new FormGroup({
    email: new FormControl('teste@teste.com', Validators.required),
    password: new FormControl('123456', Validators.required)
  });

  get formControls() { return this.loginForm.controls }

  btnRegister = () => this.actions.emit('register');
  btnLogin = () => this.credentials.emit(
    {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    });

  constructor(
  ) { }


  ngOnInit() {

  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.loading = true;
      this.btnLogin();
    }
  }

}
