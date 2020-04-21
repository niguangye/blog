import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { InsightsRoutingModule } from './insights-routing.module';
import { InsightsListComponent } from './list/list.component';
import { InsightsInsightsEditComponent } from './edit/edit.component';
import { InsightsInsightsViewComponent } from './view/view.component';

const COMPONENTS = [
  InsightsListComponent];
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
