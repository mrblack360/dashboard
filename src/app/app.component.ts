import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Dashboard';
  buttons = [
    { label: 'Nyumbani', icon: 'fa fa-home', link: 'home' },
    { label: 'Habari', icon: 'fa fa-rss', link: 'news' },
    { label: 'Kuhusu', icon: 'fa fa-info', link: 'about' },
    { label: 'Msaada', icon: 'fa fa-question', link: 'help' },
  ];
  footer = ' • Dashboard • (stable) ∧ @0.0.0';

  constructor(private metaData: Meta) {
    metaData.addTag({
      name: 'keywords',
      content: 'Dashboard, Tanzania, Dashbodi, Corona, CoronaTZ, COVID-19',
    });
  }
}
