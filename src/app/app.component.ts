import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Dashboard';
  buttons = [
    { label: 'Nyumbani', link: 'home' },
    { label: 'Habari', link: 'news' },
    { label: 'Kuhusu', link: 'about' },
    { label: 'Msaada', link: 'help' },
  ];
  footer = ' • Dashboard • (stable) ∧ @0.0.0';
}
