import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { GuestbookRoutingModule } from './guestbook-routing.module';
import { GuestbookGuestbookComponent } from './list/guestbook.component';
import { GuestbookGuestbookEditComponent } from './edit/edit.component';
import { GuestbookGuestbookViewComponent } from './view/view.component';

const COMPONENTS = [
  GuestbookGuestbookComponent];
const COMPONENTS_NOROUNT = [
  GuestbookGuestbookEditComponent,
  GuestbookGuestbookViewComponent];

@NgModule({
  imports: [
    SharedModule,
    GuestbookRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class GuestbookModule { }
