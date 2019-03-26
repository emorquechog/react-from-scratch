import React from 'react';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';

import Button from 'components/Button/Button';

import ImageTest from 'images/sample2.jpg';

configure({ adapter: new Adapter() });
describe('Button component testing', () => {
    it('renders welcome message', () => {
        const wrapper = shallow(<Button />);
        expect(wrapper.find('img')).to.have.length(1);
        expect(
            wrapper.find('img').filterWhere(item => {
                return item.prop('alt') === 'no-found';
            })
        ).to.have.lengthOf(1);
        // expect(
        //     wrapper.find('img').filterWhere(item => {
        //         return item.prop('src') === JSON.stringify(path.basename("assets/images/sample2.jpg"));
        //     })
        // ).to.have.lengthOf(1);

        expect(wrapper.find('img').prop('src')).equal(ImageTest);
    });
});
