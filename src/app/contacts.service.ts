import 'rxjs/add/operator/map';

import { Injectable, InjectionToken, Inject } from '@angular/core';
import { CONTACT_DATA } from '../app/data/contact-data';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

import { Contact} from '../app/models/contact';
import { ContactResponse} from '../app/models/contact';
import { ContactsResponse} from '../app/models/contacts-response';
import { AppConfig } from '../app/app.config';

@Injectable()
export class ContactsService {
  private API_ENDPOINT:string = 'http://localhost:4201'

  constructor(private http: HttpClient) { }

  public getContacts(): Observable<Contact[]> {
    return this.http
      .get<ContactsResponse>(this.API_ENDPOINT + '/api/contacts')
      .map(d => d.items);
  }

  public getContact(id: string): Observable<Contact> {
    let params = new HttpParams();
    params.append("id", id);

    let url = this.API_ENDPOINT + "/api/contacts/" + id;
    return this.http
      .get<ContactResponse>(url)
      .map((data) => data.item);
  }
}
