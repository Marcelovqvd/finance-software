import { Component } from '@angular/core';

@Component({
  selector: 'app-cdb-calc',
  standalone: true,
  imports: [],
  templateUrl: './cdb-calc.component.html',
  styleUrl: './cdb-calc.component.scss',
  template: `Hello {{ city }}`,
})
export class CdbCalcComponent {
  city = 'San Francisco';
}
