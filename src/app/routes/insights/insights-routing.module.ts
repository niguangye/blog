import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsightsInsightsComponent } from './list/insights.component';

const routes: Routes = [

  { path: 'insights', component: InsightsInsightsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsightsRoutingModule { }
