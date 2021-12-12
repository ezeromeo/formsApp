import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styles: [],
})
export class DynamicComponent {
  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favourites: this.fb.array(
      [
        ['Metal Gear', Validators.required],
        ['Metal Death', Validators.required],
      ],
      Validators.required
    ),
  });

  newFavourite: FormControl = this.fb.control('', Validators.required);

  get favouritesArr() {
    return this.myForm.get('favourites') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  isFieldValid(field: string) {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  addFav() {
    if (this.newFavourite.invalid) {
      return;
    }
    this.favouritesArr.push(
      this.fb.control(this.newFavourite.value, Validators.required)
    );
    this.newFavourite.reset();

    console.log();

  }
  save() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
  }

  delete(i: number) {
    this.favouritesArr.removeAt(i);
  }
}
