import visibilityFilterReducer from './visibilityFilter';
import { VisibilityFilters } from '../actions';

describe('visibilityFilterReducer tests', () => {
  it('should return show_all', () => {
    expect(visibilityFilterReducer(undefined, {})).toEqual(
      VisibilityFilters.SHOW_ALL
    );
  });

  const initialState = [];
  it('should set SHOW_ALL visibility filter', () => {
    const action = {
      type: 'SET_VISIBILITY_FILTER',
      filter: VisibilityFilters.SHOW_ALL
    };

    const result = visibilityFilterReducer(initialState, action);

    expect(result).toBe(VisibilityFilters.SHOW_ALL);
  });

  it('should set SHOW_COMPLETED visibility filter', () => {
    const action = {
      type: 'SET_VISIBILITY_FILTER',
      filter: VisibilityFilters.SHOW_COMPLETED
    };

    const result = visibilityFilterReducer(initialState, action);

    expect(result).toBe(VisibilityFilters.SHOW_COMPLETED);
  });

  it('should set SHOW_ACTIVE visibility filter', () => {
    const action = {
      type: 'SET_VISIBILITY_FILTER',
      filter: VisibilityFilters.SHOW_ACTIVE
    };

    const result = visibilityFilterReducer(initialState, action);

    expect(result).toBe(VisibilityFilters.SHOW_ACTIVE);
  });
});
