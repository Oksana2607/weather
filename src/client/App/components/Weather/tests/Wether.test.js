import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Weather from '../Weather';

configure({ adapter: new Adapter() });

describe('CitiesTable snapshot', () => {
  it('should render correctly', () => {
    const mockProps = {
      weather: {}
    };

    const wrapper = shallow(
      <Weather {...mockProps} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
