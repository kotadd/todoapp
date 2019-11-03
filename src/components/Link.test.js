import React from 'react';
import { shallow } from 'enzyme';

import Link from './Link';

describe('Link component', () => {
  let wrapper;
  let mockChildren;
  let mockOnClick;

  beforeEach(() => {
    mockChildren = (
      <>
        <span>Children</span>
      </>
    );

    mockOnClick = jest.fn();

    const mockProps = {
      active: false,
      children: mockChildren,
      onClick: mockOnClick
    };

    wrapper = shallow(<Link {...mockProps} />);
  });

  it('should render Link component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call onClick when Link is clicked', () => {
    wrapper.find('button').simulate('click');

    expect(mockOnClick).toHaveBeenCalled();
  });
});
