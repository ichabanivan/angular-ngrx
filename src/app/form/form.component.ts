import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Todo } from '../shared/todo.model';
import { TodosService } from '../todos.service';
import { Store } from '@ngrx/store';
import { AppState } from '../redux/app.state';
import { ACTIONS } from '../redux/todos.action';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  name = '';

  constructor(
    private todos: TodosService,
    private store: Store<AppState>,
  ) { }

  ngOnInit() {}

  onLoad() {
    this.store.dispatch(new ACTIONS.LoadTodos());
  }

  onAdd() {
    if (!this.name) {
      return;
    }

    const todo = new Todo(
      this.name,
      moment().format('ll')
    );

    this.store.dispatch(new ACTIONS.AddTodo(todo));

    this.name = '';
  }
}
