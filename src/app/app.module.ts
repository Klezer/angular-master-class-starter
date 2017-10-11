import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';

import { ContactsAppComponent } from './app.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';
import { ContactDetailViewComponent } from './contact-details-view/contact-details-view.component';

import { TabComponent } from './tabs/tab/tab.component';
import { TabsComponent } from './tabs/tabs/tabs.component';

import { EventBusService } from './event-bus.service';
import { ContactsDashboardComponent } from './contacts-dashboard/contacts-dashboard.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  bootstrap: [ContactsAppComponent],
  declarations: [
    ContactsAppComponent,
    ContactsListComponent,
    ContactDetailsComponent,
    ContactsEditorComponent,
    ContactDetailViewComponent,
    TabComponent,
    TabsComponent,
    ContactsDashboardComponent,
    AboutComponent
  ],
  providers: [ EventBusService,
    {
      provide: 'ConfirmNavigationGuard',
      useValue: doConfirm
    } ]
})
export class ContactsModule {

}

export function doConfirm(component) {
  return !component.warnOnClosing || window.confirm('Navigate away without saving?');
}
