import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../redux/app.state';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public todosState$: Observable<{ todos: Todo[]}>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.todosState$ = this.store.select('todos');
  }
}
