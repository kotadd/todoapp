import React from 'react';
import { shallow } from 'enzyme';
import Todo from './Todo';

it('should render Todo component', () => {
  const mockTodo = {
    id: 1,
    text: 'mock todo',
    completed: false
  };

  const wrapper = shallow(<Todo {...mockTodo} />);

  expect(wrapper).toMatchSnapshot();
});
