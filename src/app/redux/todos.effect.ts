import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, mergeMap, pluck } from 'rxjs/operators';
import { TodosService } from '../todos.service';
import { Todo } from '../shared/todo.model';
import { TYPES, ACTIONS } from './todos.action';

@Injectable()
export class TodosEffect {
  constructor(
    private actions$: Actions,
    private todos: TodosService,
  ) {}

  @Effect()
  addTodo = this.actions$
    .pipe(
      ofType(TYPES.ADD.REQUEST),
      // pluck('payload'),
      switchMap((action: ACTIONS.AddTodo) => {
        return this.todos.addTodo(action.payload);
      }),
      mergeMap((todos: Todo[]) => {
        return this.todos.loadTodos();
      }),
      mergeMap((todos: Todo[]) => {
        return [{
          type: TYPES.LOAD.REDUCER,
          payload: todos
        }];
      })
    );

  @Effect()
  loadTodos = this.actions$
      .pipe(
        ofType(TYPES.LOAD.REQUEST),
        switchMap(() => {
          return this.todos.loadTodos();
        }),
        mergeMap((todos: Todo[]) => {
          return [{
            type: TYPES.LOAD.REDUCER,
            payload: todos
          }];
        })
      );

  @Effect()
  deleteTodo = this.actions$
      .pipe(
        ofType(TYPES.DELETE.REQUEST),
        switchMap((action: ACTIONS.DeleteTodo) => {
          return this.todos.deleteTodo(action.payload);
        }),
        mergeMap((todos: Todo[]) => {
          return this.todos.loadTodos();
        }),
        mergeMap((todos: Todo[]) => {
          return [{
            type: TYPES.LOAD.REDUCER,
            payload: todos
          }];
        })
      );

  @Effect()
  updateTodo = this.actions$
    .pipe(
      ofType(TYPES.UPDATE.REQUEST),
      switchMap((action: ACTIONS.UpdateTodo) => {
        return this.todos.updateTodo(action.payload);
      }),
      mergeMap((todos: Todo[]) => {
        return this.todos.loadTodos();
      }),
      mergeMap((todos: Todo[]) => {
        return [{
          type: TYPES.LOAD.REDUCER,
          payload: todos
        }];
      })
    );
}
