import { addTodo } from './index';

it('should create a new todo', () => {
  const stubText = 'newTodo';

  const action = addTodo(stubText);

  expect(action.type).toEqual('ADD_TODO');
  expect(action.id).toEqual(0);
  expect(action.text).toEqual(stubText);
});
