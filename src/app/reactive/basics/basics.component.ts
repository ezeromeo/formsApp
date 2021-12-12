import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [],
})
export class BasicsComponent implements OnInit {
  // myForm: FormGroup = new FormGroup({
  //   name: new FormControl('RTX 2934ti'),
  //   price: new FormControl(0),
  //   stocks: new FormControl(5),
  // });

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [, [Validators.min(0), Validators.required]],
    quantity: [, [Validators.min(0), Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm.reset({
      name: 'Something',
      price: 1600,
      quantity: 10,
    });
  }

  isFieldValid(field: string) {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  save() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
    }
    this.myForm.reset();
  }
}
