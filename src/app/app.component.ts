import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Dashboard';
  buttons = [
    { label: 'Habari', link: 'news' },
    { label: 'Kuhusu', link: 'about' },
    { label: 'Msaada', link: 'help' },
  ];
  footer = 'Maswi(mrblack360) • Dashboard • (stable) ∧ @0.0.0';
}
