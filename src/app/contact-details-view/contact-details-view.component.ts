import { EventBusService } from '../event-bus.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'trm-contact-details-view',
  templateUrl: './contact-details-view.component.html',
  styleUrls: ['./contact-details-view.component.css'],
  providers: [ ContactsService ]
})
export class ContactDetailViewComponent implements OnInit {

  contact: Contact;

  constructor(private route: ActivatedRoute, private contactsService: ContactsService, private router: Router, private eventBusService: EventBusService) { }

  ngOnInit() {
    this.route.data
    .map(data => data['contact'])
    .subscribe(contact => {
      this.contact = contact;
      this.eventBusService.emit('appTitleChange', 'View Contact Details - ' + contact.name);
    });
  }

  navigateToEditor(contact: Contact) {
    this.router.navigate(['edit'], {
      relativeTo: this.route
    });
  }
}
