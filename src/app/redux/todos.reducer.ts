import { TYPES, allowedTypes } from './todos.action';

const initialState = [];


export function todosReducer(state = initialState, action: allowedTypes) {
  switch (action.type) {
    case TYPES.LOAD.REDUCER: {
      return {
        todos: action.payload,
      };
    }
    default:
      return state;
  }
}
