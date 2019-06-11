import { RegisterService } from './register.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @Output() actions: EventEmitter<string> = new EventEmitter();

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    name: new FormControl('', [Validators.required, Validators.minLength(1)]),
    age: new FormControl('', [Validators.required, Validators.min(0), Validators.max(110)])
  });
  submitted = false;

  get regForm() { return this.registerForm.controls; }

  btnReturn = () => this.actions.emit('return');

  constructor(
    private regService: RegisterService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid)
      this.regService.submitNewUser('CADASTRADO COM SUCESSO');
  }


}
