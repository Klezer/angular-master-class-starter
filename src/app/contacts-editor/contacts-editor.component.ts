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

  constructor(private contactsService: ContactsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let contactId = this.route.snapshot.paramMap.get('id');
    this.contactsService
      .getContact(contactId)
      .subscribe(data => this.contact = data);
  }

  public save(contact: Contact): void {
    this.contactsService
      .updateContact(contact)
      .subscribe(updatedContact => {
        this.router.navigate(['/contacts']);
      });
  }

  public cancel(contact: Contact): void {
    this.router.navigate(['/contact', contact.id]);
  }
}
