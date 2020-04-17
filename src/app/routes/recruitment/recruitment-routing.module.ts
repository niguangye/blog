import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecruitmentListComponent } from './list/list.component';

const routes: Routes = [

  { path: '', component: RecruitmentListComponent, data: { 'title': '招聘信息'} }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruitmentRoutingModule { }
