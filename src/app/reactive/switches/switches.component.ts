import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [],
})
export class SwitchesComponent implements OnInit {
  myForm: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    notifications: [true, Validators.required],
    terms: [false, Validators.requiredTrue],
  });

  person = {
    gender: 'M',
    notifications: true,
  };

  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.myForm.reset({ ...this.person, terms: false });

    this.myForm.valueChanges.subscribe(({terms, ...rest}) => {

      this.person = rest;
    });
  }

  save() {
    const formValue = { ...this.myForm.value };
    delete formValue.terms;
    this.person = formValue;
  }
}
