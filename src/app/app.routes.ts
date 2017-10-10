import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';

export const APP_ROUTES = [
  { path: 'contacts', component: ContactsListComponent },
  { path: '',   redirectTo: 'contacts', pathMatch: 'full' },
  { path: 'contacts/:id', component: ContactDetailsComponent }
];
