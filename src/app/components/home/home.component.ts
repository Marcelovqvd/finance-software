import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CdbCalcComponent } from '../cdb-calc/cdb-calc.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CdbCalcComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
