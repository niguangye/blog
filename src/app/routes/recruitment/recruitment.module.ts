import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { RecruitmentRoutingModule } from './recruitment-routing.module';
import { RecruitmentListComponent } from './list/list.component';
import { RecruitmentCurdEditComponent } from './edit/edit.component';
import { RecruitmentCurdViewComponent } from './view/view.component';

const COMPONENTS = [
  RecruitmentListComponent];
const COMPONENTS_NOROUNT = [
  RecruitmentCurdEditComponent,
  RecruitmentCurdViewComponent];

@NgModule({
  imports: [
    SharedModule,
    RecruitmentRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class RecruitmentModule { }
