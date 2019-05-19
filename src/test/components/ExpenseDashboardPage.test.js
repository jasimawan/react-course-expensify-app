import React from 'react';
import {shallow} from 'enzyme';
import ExpenseDashboardPage from '../../Components/ExpenseDashboardPage';

test('should render not found page', () => {
    const wrapper = shallow(<ExpenseDashboardPage/>);
    expect(wrapper).toMatchSnapshot();
});