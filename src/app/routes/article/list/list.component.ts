import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent } from '@delon/abc/table';
import { SFSchema } from '@delon/form';

interface ItemData {
  href: string;
  title: string;
  avatar: string;
  description: string;
  content: string;
}

@Component({
  selector: 'app-article-list',
  templateUrl: './list.component.html',
})
export class ArticleListComponent implements OnInit {
  data: ItemData[] = [];
  loading: true;

  constructor(private http: _HttpClient, private modal: ModalHelper) { }

  ngOnInit() {
    this.loadData(1);
  }

  loadData(pi: number): void {
    this.data = new Array(5).fill({}).map((_, index) => {
      return {
        href: '/#/articles/view',
        title: `ELF文件组成结构`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description: 'ELF文件简介和组成结构',
        content:
          'We supply a series of design principles, practical patterns and high quality design resources ' +
          '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
      };
    });
  }

  onLoadMore(){
    this.loadData(2)
  }

}
