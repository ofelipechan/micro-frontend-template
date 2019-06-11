import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor() { }

  submitNewUser(msg: string){
    alert(msg)
  }
}
