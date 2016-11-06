import { Injectable } from '@angular/core';
//import { HttpModule } from '@angular/http';

@Injectable()
export class ContactService {

  constructor() {}

  getContacts(){
    var contacts = [{
      url: 'https://plus.google.com/+jasonpolitis',
      icon: 'google',
      text: 'google+'
    },
    {
      url: 'https://www.linkedin.com/in/jasonpolitis',
      icon: 'linkedin',
      text: 'LinkedIn'
    },
    {
      url: 'https://twitter.com/dagyrox',
      icon: 'twitter',
      text: 'Twitter'
    },
    {
      url: 'https://instagram.com/politisjp',
      icon: 'instagram',
      text: 'Instagram'
    },
    {
      url: 'https://www.youtube.com/jasonpolitis',
      icon: 'youtube',
      text: 'YouTube'
    },
    {
      url: 'https://github.com/dagyrox',
      icon: 'github',
      text: 'GitHub'
    }
  ];

    return contacts;
  }

}
