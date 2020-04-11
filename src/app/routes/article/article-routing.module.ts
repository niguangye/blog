import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleListComponent } from './list/list.component';
import { ArticleViewComponent } from './view/view.component';
import { ArticleAddComponent } from './add/add.component';

const routes: Routes = [
  { path: 'list', component: ArticleListComponent, data: { title: '主页' } },
  { path: 'view', component: ArticleViewComponent, data: { title: '文章' } },
  { path: 'add', component: ArticleAddComponent, data: { title: '新增文章' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
