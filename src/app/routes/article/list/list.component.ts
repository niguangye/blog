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
    this.data = [{
        href: '/#/articles/view',
        title: `ELF文件组成结构`,
        avatar: 'assets/avatar/avatar2.png',
        description: 'ELF文件简介和组成结构',
        content:
          'We supply a series of design principles, practical patterns and high quality design resources ' +
          '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
      },
      {
        href: '/#/articles/view',
        title: `别让自己强了自己`,
        avatar: 'assets/avatar/avatar.png',
        description: '别让自己强了自己',
        content:
          '告诉你一种面对人生的思考方式，在这种思考方式下，你会有更多的可能性，更大的场景……而不是直接把自己归到“平常人”，把自己“墙”了！'
      },
    ]
  }

  onLoadMore(){
    this.loadData(2)
  }

}
