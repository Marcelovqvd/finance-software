import { Component } from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

interface CDBFormInterface 

@Component({
  selector: 'app-cdbform',
  standalone: true,
  imports: [BtnPrimaryComponent, ReactiveFormsModule],
  templateUrl: './cdbform.component.html',
  styleUrl: './cdbform.component.scss',
})
export class CDBformComponent {
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
