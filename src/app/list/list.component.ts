import { Component, OnInit } from '@angular/core';
import { Todos, Todo } from '../shared/todo.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  todos: Todo[] = [
    new Todo('Todo', '10.10.2010'),
    new Todo('Todo 2', '10.10.2008'),
  ];

  constructor() { }

  ngOnInit() {
  }
}
