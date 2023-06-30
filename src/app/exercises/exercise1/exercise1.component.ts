import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, ValidatorFn } from '@angular/forms';
import { Validators, ValidationErrors } from '@angular/forms';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.css']
})

export class Exercise1Component implements OnInit {
  registrationForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10), this.passwordComplexityValidator()]]

    });

  }
  passwordComplexityValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (value && value.length >= 4 && value.length <= 10) {
        if (!/\W/.test(value)) {
          return { specialChars: true };
        }
        if (/(.)\1/.test(value)) {
          return { consecutiveChars: true };
        }
      }
      return null;
    };
  }
  submitForm(): void {

    if (this.registrationForm.valid) {
      console.log('Registration successful!');
    }
  }
}