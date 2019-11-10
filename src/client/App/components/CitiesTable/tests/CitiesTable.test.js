import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CitiesTable from '../CitiesTable';

configure({ adapter: new Adapter() });

describe('CitiesTable snapshot', () => {
  it('should render correctly', () => {
    const mockProps = {
      cities: []
    };

    const wrapper = shallow(
      <CitiesTable {...mockProps} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
