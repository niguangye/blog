import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { InsightsRoutingModule } from './insights-routing.module';
import { InsightsInsightsComponent } from './list/insights.component';
import { InsightsInsightsEditComponent } from './edit/edit.component';
import { InsightsInsightsViewComponent } from './view/view.component';

const COMPONENTS = [
  InsightsInsightsComponent];
const COMPONENTS_NOROUNT = [
  InsightsInsightsEditComponent,
  InsightsInsightsViewComponent];

@NgModule({
  imports: [
    SharedModule,
    InsightsRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class InsightsModule { }
