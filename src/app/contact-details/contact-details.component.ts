import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Contact} from '../models/contact';
import 'rxjs/add/operator/switchMap';
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'trm-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css'],
  providers: [
    ContactsService
  ]
})
export class ContactDetailsComponent implements OnInit {
  public contact: Contact;

  constructor(private contactsService: ContactsService, private route: ActivatedRoute) { }

  ngOnInit() {
    let contactId = this.route.snapshot.paramMap.get('id');
    this.contactsService
      .getContact(contactId)
      .subscribe(data => this.contact = data);
  }
}
