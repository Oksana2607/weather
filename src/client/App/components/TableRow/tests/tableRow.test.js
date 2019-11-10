import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { TableRow } from '../TableRow';

configure({ adapter: new Adapter() });

describe('TableRow snapshot', () => {
  it('should render correctly', () => {
    const mockProps = {
      item: {}
    };

    const wrapper = shallow(
      <TableRow {...mockProps} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
