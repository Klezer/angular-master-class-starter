import { EventBusService } from './../event-bus.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ContactsService } from '../contacts.service';
import { Contact} from '../models/contact';

@Component({
  selector: 'trm-contacts-editor',
  templateUrl: './contacts-editor.component.html',
  styleUrls: ['./contacts-editor.component.css'],
  providers: [ContactsService]
})
export class ContactsEditorComponent implements OnInit {
  public contact: Contact = <Contact>{ address: {}};
  private warnOnClosing: boolean = true;

  constructor(private contactsService: ContactsService, private route: ActivatedRoute, private router: Router, private eventBusService: EventBusService) { }

  ngOnInit() {
    this.route.paramMap
    .switchMap(paramMap => this.contactsService.getContact(paramMap.get('id')))
    .subscribe(contact => {
      this.contact = contact;
      this.eventBusService.emit('appTitleChange', 'Edit Contact Details - ' + contact.name);
    });
  }

  public save(contact: Contact): void {
    this.contactsService
      .updateContact(contact)
      .subscribe(updatedContact => {
        this.router.navigate(['/contact', contact.id]);
        this.eventBusService.emit('reloadList', contact.id);
      });
  }

  public cancel(contact: Contact): void {
    this.router.navigate(['/contact', contact.id]);
  }
}
