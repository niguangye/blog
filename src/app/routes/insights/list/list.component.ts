import { Component, OnInit, } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';


@Component({
  selector: 'app-insights-list',
  templateUrl: './list.component.html',
})
export class InsightsListComponent implements OnInit {

  selectedIndex = 0;
  todoData: any[];
  tabs: Array<{ name: string; content: string }> = [];
  constructor(private http: _HttpClient, private modal: ModalHelper) { }

  ngOnInit() {
    this.tabs = [{name:'GDP',content:''},{name:'ToDO',content:''},{name:'小康',content:''}]
    this.todoData = [
      {'avatar': '1',
        'name':'OS 进程调度',
        'content':'OS 进程调度器',
        'completed': false,
      },
      {'avatar': '2',
        'name':'ToDoList',
        'content':'ToDoList',
        'completed': true,
      },]
  }

  log(args: any[]): void {
    console.log(args);
  }


}
