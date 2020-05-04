import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css'],
})
export class HelpComponent implements OnInit {
  members = [
    {
      name: 'Maswi, Mussa',
      imageUrl: '',
      email: '',
      whatsappLink: '',
      facebookLink: '',
      twitterLink: '',
      linkedinLink: '',
    },
    {
      name: 'Chingalo, Eric',
      imageUrl: '',
      email: '',
      whatsappLink: '',
      facebookLink: '',
      twitterLink: '',
      linkedinLink: '',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
