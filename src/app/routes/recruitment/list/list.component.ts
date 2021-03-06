import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';

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
        'description': `和优秀的人，做有挑战的事\n字节跳动拥有较为完善的职业发展体系，充分贴近年轻员工追求自我发展的定位，
        为员工提供具有针对性和差异化的培训项目`
      },
      {
        'title':'拼多多',
        'avatar':'assets/logos/pinduoduo.jpg',
        'href':'https://www.pinduoduo.com/recruit.html',
        'description': `拼着买，才便宜\n拼多多是中国新电商模式的开创者，目前拥有超过3.44亿的活跃买家和超过170万活跃商家。
        在以人为先的理念下，拼多多融合物质消费与精神消费，用户可以通过拼单，与好友分享买到便宜好货的快乐。`
      },

    {
      'title':'有赞',
      'avatar':'assets/logos/youzan.jpg',
      'href':'http://campus.youzan.com/apply/youzan/3750#/jobs?zhineng=7902&page=1&_k=31oshc',
      'description': `Enjoy有赞，一个开心的组织\n我们致力于成为商家服务领域里最被新任的引领者，并持续做一个Enjoy的组织`
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
