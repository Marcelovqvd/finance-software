import { Component } from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-cdb-calc',
  standalone: true,
  imports: [BtnPrimaryComponent, ReactiveFormsModule],
  templateUrl: './cdb-calc.component.html',
  styleUrl: './cdb-calc.component.scss',
})
export class CdbCalcComponent {
  valueForm!: FormGroup;

  constructor() {
    this.valueForm = new FormGroup({
      value: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
      ]),
    });
  }

  onSubmit() {
    console.log(this.valueForm.value);
  }
}
