import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ValidatorService } from 'src/app/shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
})
export class RegisterComponent implements OnInit {
  myForm: FormGroup = this.fb.group(
    {
      name: [
        '',
        [Validators.required, Validators.pattern(this.vs.fullNamePattern)],
      ],
      email: [
        '',
        [Validators.required, Validators.pattern(this.vs.emailPattern)],
        [this.emailValidator],
      ],
      username: ['', [Validators.required, this.vs.cantBeStrider]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    },
    {
      validators: [this.vs.equalFields('password', 'confirmPassword')],
    }
  );

  get emailErrorMsg(): string {
    const errors = this.myForm.get('email')?.errors;
    if (errors?.required) {
      return 'Email is required';
    } else if (errors?.pattern) {
      return 'The value entered is not in mail format';
    } else if (errors?.takenEmail) {
      return 'This email has already been taken';
    }
    return '';
  }
  constructor(
    private fb: FormBuilder,
    private vs: ValidatorService,
    private emailValidator: EmailValidatorService
  ) {}

  ngOnInit(): void {
    this.myForm.reset({
      name: 'Ezequiel Romeo',
      email: 'test1@test.com',
      username: 'ezeromeo',
      password: '123456',
      confirmPassword: '123456',
    });
  }

  nonValidField(field: string) {
    return this.myForm.get(field)?.invalid && this.myForm.get(field)?.touched;
  }

  submitForm() {
    console.log(this.myForm.value);

    this.myForm.markAllAsTouched;
  }
}
