import { Component, OnInit, } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';


@Component({
  selector: 'app-insights-insights',
  templateUrl: './insights.component.html',
})
export class InsightsInsightsComponent implements OnInit {

  constructor(private http: _HttpClient, private modal: ModalHelper) { }

  ngOnInit() { }

  add() {
    // this.modal
    //   .createStatic(FormEditComponent, { i: { id: 0 } })
    //   .subscribe(() => this.st.reload());
  }

}
