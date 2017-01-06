import { shallow } from 'enzyme';
import { expect } from 'chai';
import React from 'react';

import { Home } from 'containers/Home';

describe('Home', () => {
  describe('render', () => {
    it('should not display Search Result component if loans = empty & search query = empty', () => {

      const props = {dispatch: () => {}, search: {}, location: {}};
      const wrapper = shallow(<Home {...props} />);
      console.log(wrapper.node);
      expect(wrapper.node.type).to.eql('div');
    });





  });
});
