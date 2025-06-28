import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'button-demo',
  standalone: true,
  imports: [ButtonModule],
  template: `
    <div class="card flex justify-center">
      <p-button label="Check"></p-button>
    </div>
  `,
})
export class ButtonDemo {}
