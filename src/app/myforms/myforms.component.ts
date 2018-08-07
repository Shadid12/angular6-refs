import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from '@angular/forms';

@Component({
  selector: 'app-myforms',
  templateUrl: './myforms.component.html',
  styleUrls: ['./myforms.component.css']
})
export class MyformsComponent implements OnInit {
  myForm: FormGroup;
  myFormValidator: FormGroup;
  skuV: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'skub': ['ABC123']
    });
    this.myFormValidator = fb.group({
      'sku': ['ookeow']
    });
  }

  ngOnInit() {
  }

  onSubmit(form: any): void {
    console.log('you submitted value:', form);
  }

  onSubmitb(value: string): void {
    console.log('Submitted witht the builder', value)
  }

}
