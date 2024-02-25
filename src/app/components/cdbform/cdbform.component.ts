import { Component } from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-cdbform',
  standalone: true,
  imports: [BtnPrimaryComponent, ReactiveFormsModule],
  templateUrl: './cdbform.component.html',
  styleUrl: './cdbform.component.scss',
})
export class CDBformComponent {
  valueForm!: FormGroup;
  userValue = null;

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
    this.userValue = this.valueForm.value;
  }
}
