import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Contact} from '../models/contact';
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css'],
  providers: [ ContactsService ]
})
export class ContactsListComponent implements OnInit {
  public contacts: Contact[];

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    this.contactsService
      .getContacts()
      .subscribe(data => this.contacts = data);
  }
}
