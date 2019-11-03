import React from 'react';
import { shallow } from 'enzyme';

import TodoList from './TodoList';

describe('TodoList component', () => {
  let wrapper;
  let mockTodos;
  let mockToggleTodo;

  beforeEach(() => {
    mockTodos = [
      {
        id: 1,
        text: 'mock todo',
        completed: false
      }
    ];

    mockToggleTodo = jest.fn();

    const mockProps = {
      todos: mockTodos,
      toggleTodo: mockToggleTodo
    };
    wrapper = shallow(<TodoList {...mockProps} />);
  });
  it('should render TodoList component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call toggleTodo with the right id when Todo clicked', () => {
    wrapper.find('Todo').simulate('click');

    expect(mockToggleTodo).toHaveBeenCalled();
  });
});
