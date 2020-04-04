import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticleListComponent } from './list/list.component';
import { ArticleViewComponent } from './view/view.component';
import { ArticleAddComponent } from './add/add.component';

const COMPONENTS = [
  ArticleListComponent];
const COMPONENTS_NOROUNT = [
  ArticleViewComponent,
  ArticleAddComponent];

@NgModule({
  imports: [
    SharedModule,
    ArticleRoutingModule,
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT,
  ],
  exports: [
    ArticleListComponent,
  ],
  entryComponents: COMPONENTS_NOROUNT,
})
export class ArticleModule { }
