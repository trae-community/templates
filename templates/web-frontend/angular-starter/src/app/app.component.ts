import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <div style="text-align:center; padding: 2rem;">
      <h1>Welcome to {{title}}!</h1>
      <p>Angular starter template ready.</p>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'angular-starter';
}
