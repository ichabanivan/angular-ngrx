import { Action } from '@ngrx/store';

import { Todo } from '../shared/todo.model';

const createConst = type => ({
  REQUEST: `${type}.REQUEST`,
  FINISH: `${type}.FINISH`,
  ERROR: `${type}.ERROR`,
  CLEAR: `${type}.CLEAR`,
  SUCCESS: `${type}.SUCCESS`,
  REDUCER: `${type}.SUCCESS`,
});

const affix  = '@todo';
export const PREFIX = new RegExp(affix, 'i');

const ADD = createConst(`${affix}/ADD`);
const DELETE = createConst(`${affix}/DELETE`);
const UPDATE = createConst(`${affix}/UPDATE`);
const LOAD = createConst(`${affix}/LOAD`);

export const TYPES = {
  ADD,
  DELETE,
  UPDATE,
  LOAD,
};

class AddTodo implements Action {
  readonly type = ADD.REQUEST;

  constructor(public payload: Todo) {}
}

class DeleteTodo implements Action {
  readonly type = DELETE.REQUEST;

  constructor(public payload: Todo) {}
}

class UpdateTodo implements Action {
  readonly type = UPDATE.REQUEST;

  constructor(public payload: Todo) {}
}

class LoadTodos implements Action {
  readonly type = LOAD.REQUEST;

  constructor() {}
}

export const ACTIONS = {
  AddTodo,
  DeleteTodo,
  UpdateTodo,
  LoadTodos,
};

export type allowedTypes = AddTodo | DeleteTodo | UpdateTodo | LoadTodos;
