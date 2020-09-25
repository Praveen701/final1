import { Injectable } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class LoginvService {

  constructor() { }

  form:FormGroup = new FormGroup({
    $key:new FormControl(null),
    email:new FormControl('',Validators.email),
    pass:new FormControl('',Validators.required)



  });


}
