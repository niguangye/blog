import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleListComponent } from './list/list.component';
import { ArticleViewComponent } from './view/view.component';

const routes: Routes = [
  { path: 'list', component: ArticleListComponent },
  { path: 'view', component: ArticleViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
