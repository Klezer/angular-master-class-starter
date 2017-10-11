import { EventBusService } from './../event-bus.service';
import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Contact} from '../models/contact';
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs/Observable";
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/delay';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css'],
  providers: [ ContactsService ]
})
export class ContactsListComponent implements OnInit {
  term$ = new Subject<string>();
  contacts$: Observable<Array<Contact>>;

  constructor(private contactsService: ContactsService, private eventBusService: EventBusService) { }

  ngOnInit() {

    this.loadContacts();
    this.eventBusService.emit('appTitleChange', 'Contacts Overview');

    this.eventBusService
      .observe('reloadList')
      .subscribe(contactId => {
        this.loadContacts();
      });
  }

  loadContacts() {
    const search$ = this.term$.debounceTime(200)
    .distinctUntilChanged()
    .switchMap(term => this.contactsService.search(term)).delay(1000);

    const initialData$ = this.contactsService.getContacts();
    this.contacts$ = search$.merge(initialData$.takeUntil(this.term$));
  }

  trackedByContactId(index: number, contact: Contact) {
    return contact.id;
  }
}
