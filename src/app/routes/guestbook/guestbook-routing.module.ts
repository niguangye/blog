import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuestbookGuestbookComponent } from './list/guestbook.component';

const routes: Routes = [

  { path: 'guestbook', component: GuestbookGuestbookComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestbookRoutingModule { }
