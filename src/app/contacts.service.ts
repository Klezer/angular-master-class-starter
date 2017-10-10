import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { CONTACT_DATA } from '../app/data/contact-data';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

import { Contact} from '../app/models/contact';
import { ContactResponse} from '../app/models/contact';
import { ContactsResponse} from '../app/models/contacts-response';

@Injectable()
export class ContactsService {
  private API_ENDPOINT: string = 'http://localhost:4201';

  constructor(private http: HttpClient) { }

  public getContacts(): Observable<Contact[]> {
    return this.http
      .get<ContactsResponse>(this.API_ENDPOINT + '/api/contacts')
      .map(d => d.items);
  }

  public getContact(id: string): Observable<Contact> {
    return this.http
      .get<ContactResponse>(this.API_ENDPOINT + '/api/contacts/' + id)
      .map(d => d.item);
  }
}
