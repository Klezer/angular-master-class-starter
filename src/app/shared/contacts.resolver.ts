import { Observable } from 'rxjs/Observable';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';

@Injectable()
export class ContactsResolver implements Resolve<Contact> {
  constructor(private contactsService: ContactsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Contact | Observable<Contact> | Promise<Contact> {
    return this.contactsService.getContact(route.params['id']);
  }
}
