import { Todo } from '../shared/todo.model';

export interface AppState {
  todos: {
    todos: Todo[],
  };
}
