import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Todo } from './shared/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  constructor(private http: HttpClient) { }

  loadTodos() {
    return this.http.get('http://localhost:4201/todos');
  }

  addTodo(todo: Todo) {
    return this.http.post('http://localhost:4201/todos', todo);
  }

  deleteTodo(todo: Todo) {
    return this.http.delete('http://localhost:4201/todos/' + todo.id);
  }

  updateTodo(todo: Todo) {
    return this.http.put('http://localhost:4201/todos/' + todo.id, todo);
  }
}
