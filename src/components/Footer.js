import React from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../actions';

const Footer = () => {
  return (
    <>
      <span>Show: </span>
      <FilterLink filter={VisibilityFilters.SHOW_ALL}>ALL</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
        Completed
      </FilterLink>
    </>
  );
};

export default Footer;
