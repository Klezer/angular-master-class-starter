import { AboutComponent } from './about/about.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactDetailViewComponent } from './contact-details-view/contact-details-view.component';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';
import { ContactsDashboardComponent } from './contacts-dashboard/contacts-dashboard.component';

export const APP_ROUTES = [
  {
    path: '',
    component: ContactsDashboardComponent,
    children: [
      { path: '', redirectTo: 'contact/0', pathMatch: 'full' },
      { path: 'contact/:id', component: ContactDetailViewComponent },
      { path: 'contact/:id/edit', component: ContactsEditorComponent, canDeactivate: ['ConfirmNavigationGuard'] }
    ]
  },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '/' }
];
