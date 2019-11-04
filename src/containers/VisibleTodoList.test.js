import { VisibilityFilters } from '../actions';

import { getVisibleTodos } from './VisibleTodoList';

describe('getVisibleTodos test', () => {
  let mockTodos;
  beforeEach(() => {
    mockTodos = [
      {
        id: 1,
        text: 'active todo',
        completed: false
      },
      {
        id: 2,
        text: 'completed todo',
        completed: true
      }
    ];
  });

  it('should show all todos', () => {
    const filter = VisibilityFilters.SHOW_ALL;

    const result = getVisibleTodos(mockTodos, filter);

    expect(result).toBe(mockTodos);
  });

  it('should show completed todos', () => {
    const filter = VisibilityFilters.SHOW_COMPLETED;

    const result = getVisibleTodos(mockTodos, filter);

    expect(result).toEqual([mockTodos[1]]);
  });

  it('should show active todos', () => {
    const filter = VisibilityFilters.SHOW_ACTIVE;

    const result = getVisibleTodos(mockTodos, filter);

    expect(result).toEqual([mockTodos[0]]);
  });
});
