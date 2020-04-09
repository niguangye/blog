import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-article-view',
  templateUrl: './view.component.html',
})
export class ArticleViewComponent implements OnInit {

  constructor(
    public http: _HttpClient
  ) { }

  ngOnInit(): void {

  }

  onError(e){
    console.log(e)
  }

}
