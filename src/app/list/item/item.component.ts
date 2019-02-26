import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../shared/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../redux/app.state';
import { ACTIONS } from '../../redux/todos.action';
import { TodosService } from '../../todos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  constructor(
    private store: Store<AppState>,
  ) { }

  @Input() todo: Todo;

  ngOnInit() {}

  onCheck() {
    this.store.dispatch(new ACTIONS.UpdateTodo(this.todo));
  }

  onDelete() {
    this.store.dispatch(new ACTIONS.DeleteTodo(this.todo));
  }
}
