import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CdbCalcComponent } from './components/cdb-calc/cdb-calc.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, CdbCalcComponent],
})
export class AppComponent {
  title = 'finance-software';
}
