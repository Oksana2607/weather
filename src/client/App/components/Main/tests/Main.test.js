import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Main from '../Main';

configure({ adapter: new Adapter() });

describe('Main snapshot', () => {
  it('should render correctly', () => {
    const mockProps = {
      city: {},
      weather: {},
      chooseCity() {},
      location: {}
    };

    const wrapper = shallow(
      <Main {...mockProps} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
