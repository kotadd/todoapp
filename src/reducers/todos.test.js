import todoReducer from './todos';

const initialState = [];

describe('todoReducer tests', () => {
  it('should return initial state', () => {
    expect(todoReducer(undefined, {})).toEqual(initialState);
  });

  it('should add todo with addTodo action', () => {
    const action = { type: 'ADD_TODO', id: 1, text: 'addTodoTest' };

    const state = todoReducer(initialState, action)[0];

    expect(state.id).toBe(1);
    expect(state.text).toEqual('addTodoTest');
    expect(state.completed).toBe(false);
  });

  it('should toggle todo with toggleTodo action', () => {
    const initialState = [{ id: 1, text: 'initialState', completed: false }];
    const action = { type: 'TOGGLE_TODO', id: 1 };

    const state = todoReducer(initialState, action)[0];

    expect(state.completed).toBe(true);
  });

  it('should not change anything with unknown action', () => {
    const initialState = [{ id: 1, text: 'initialState', completed: false }];
    const action = { type: 'UNKNOWN_TYPE', id: 1 };

    const state = todoReducer(initialState, action);

    expect(state).toEqual(initialState);
  });
});
