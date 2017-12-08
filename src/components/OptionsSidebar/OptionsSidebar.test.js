import React from 'react';
import { shallow } from 'enzyme';
import OptionsSidebar from './OptionsSidebar';

const mockJson = {
  message: 'test',
};

describe('OptionsSidebar', () => {
  it('renders json widget', () => {
    const component = shallow(<OptionsSidebar json={JSON.stringify(mockJson)} />);
    expect(component.find('div').text()).toEqual(expect.stringContaining('<OptionsPanel /><JsonPane />'));
  });
});
