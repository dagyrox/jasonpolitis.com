import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';

@Component({
  moduleId: module.id,
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.css', '../../content/css/style.css'],
  providers: [ContactService]
})
export class ContactComponent implements OnInit {

  constructor(private contactService: ContactService) {}
    contacts: any;

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
  }

}
