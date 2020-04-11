import { Component, OnInit, ViewChild } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { SFSchema, SFStringWidgetSchema } from '@delon/form';

@Component({
  selector: 'app-article-add',
  templateUrl: './add.component.html',
})
export class ArticleAddComponent implements OnInit {

  editorSchema: SFSchema = {
    properties: {
      title: {
        type: 'string',
        title: '',
        ui: {
            maxLength: 20,
            placeholder: '请输入标题,最多20个字',
            change: val => console.log(val),
            focus: e => console.log('focus', e),
            blur: e => console.log('blur', e),
            enter: e => console.log('enter', e),
          } as SFStringWidgetSchema,
        },
      editor: {
        type: 'string',
        title: '',
        ui: {
          widget: 'md',
        }
      }
    },
    required: ['title', 'editor']
  }


  constructor(public msg: NzMessageService) { }
  submit(value: any) { this.msg.success(JSON.stringify(value)); }

  ngOnInit(): void {

  }


}
