import { addTodo } from './index';

it('should create a new todo', () => {
  const todoText = 'newTodo';

  const todoType = addTodo(todoText).type;

  expect(todoType).toEqual('ADD_TODO');
});
