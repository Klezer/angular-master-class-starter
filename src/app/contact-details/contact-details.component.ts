import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../models/contact'

@Component({
  selector: 'trm-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  @Input() contact: Contact;

  @Output() edit = new EventEmitter<Contact>();

  constructor() { }

  ngOnInit() {

  }

}
