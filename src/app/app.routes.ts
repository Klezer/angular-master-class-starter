import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';

export const APP_ROUTES = [
  { path: 'contacts', component: ContactsListComponent },
  { path: '',   redirectTo: 'contacts', pathMatch: 'full' },
  { path: 'contact/:id', component: ContactDetailsComponent },
  { path: 'contact/:id/edit', component: ContactsEditorComponent },
  { path: '**', redirectTo: '/' }
];
