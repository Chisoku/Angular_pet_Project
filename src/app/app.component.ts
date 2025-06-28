import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonDemo } from './button-demo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonDemo],
  //templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  template: `
    <h2>Hello PrimeNG, khánh chi test</h2>
    <button-demo />
  `,
})
export class AppComponent {
  title = 'Chi_Anglar_19';
}
