import { Component, OnInit } from '@angular/core';

import { Members } from '../../shared/helpers/members-details';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css'],
})
export class HelpComponent implements OnInit {
  imageAssetsUrl = '../../../assets/members/';
  subject = [
    '?subject=DASHBOARD%20HELP&bcc=rmaswi360@outlook.com',
    '?text=DASHBOARD HELP',
    '',
    '',
    '',
  ];
  members = Members;
  icons = [
    { name: 'fa fa-envelope', class: 'email', link: 'mailto:' },
    { name: 'fa fa-whatsapp', class: 'whatsapp', link: 'https://wa.me/' },
    {
      name: 'fa fa-facebook',
      class: 'facebook',
      link: 'https://www.facebook.com/',
    },
    {
      name: 'fa fa-twitter',
      class: 'twitter',
      link: 'https://www.twitter.com/',
    },
    {
      name: 'fa fa-linkedin',
      class: 'linkedin',
      link: 'https://www.linkedin.com/in/',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
