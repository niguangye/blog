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
      {'title':'快手',
        'avatar':'assets/logos/kuaishou.jpg',
        'href':'https://zhaopin.kuaishou.cn/recruit/e/#/official/social/',
        'description': '快手是记录和分享大家生活的平台，每天数百万的原创新鲜视频\n在这里，发现真实有趣的世界。'
      },
      {
        'title':'字节跳动',
        'avatar':'assets/logos/zijie.png',
        'href':'https://job.bytedance.com/society/position',
        'description': `和优秀的人，做有挑战的事\n字节跳动拥有较为完善的职业发展体系，充分贴近年轻员工追求自我发展的定位，为员工提供具有针对性和差异化的培训项目`
      }
    ];
    this.loading = false;
  }

  add() {
    // this.modal
    //   .createStatic(FormEditComponent, { i: { id: 0 } })
    //   .subscribe(() => this.st.reload());
  }

}
