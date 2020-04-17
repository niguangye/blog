import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent } from '@delon/abc/table';
import { SFSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-recruitment-list',
  templateUrl: './list.component.html',
})
export class RecruitmentListComponent implements OnInit {

  list: any[] = [null];
  loading = true;

  constructor(private http: _HttpClient, public msg: NzMessageService, private modal: ModalHelper) { }

  ngOnInit() {
    this.loading = true;
    this.list = [
      {'title':'快手', 'avatar':'assets/logos/kuaishou.jpg',
        'description': '快手是记录和分享大家生活的平台，每天数百万的原创新鲜视频\n在这里，发现真实有趣的世界。'
      },

    ];
    this.loading = false;
  }

  add() {
    // this.modal
    //   .createStatic(FormEditComponent, { i: { id: 0 } })
    //   .subscribe(() => this.st.reload());
  }

}
