import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsightsListComponent } from './list/list.component';

const routes: Routes = [

  { path: '', component: InsightsListComponent, data: { title: '洞见' } }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsightsRoutingModule { }
