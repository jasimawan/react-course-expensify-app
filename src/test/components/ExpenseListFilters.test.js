import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListFilters} from "../../Components/ExpenseListFilters";
import {filters, altFilters} from "../fixtures/filters";
import moment from "moment";

let setTextFilter, sortByDate, sortByAmount , setStartDate, setEndDate,wrapper;
beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    );
});

test('should render expense list filter', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render expense list filters with alt data', () => {
    wrapper.setProps({
       filters:altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
    const value = 'bills';
    wrapper.find('input').simulate('change', {
        target: {value}
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should handle sort by date', () => {
    const value = 'date';
    wrapper.setProps({
        filters:altFilters
    });
    wrapper.find('select').simulate('change', {
        target:{value}
    });
    expect(sortByDate).toHaveBeenCalledWith();
});

test('should handle sort by amount', () => {
    const value = 'amount';
    wrapper.find('select').simulate('change', {
        target:{value}
    });
    expect(sortByAmount).toHaveBeenCalledWith();
});

test('should handle date changes', () => {
    const startDate = moment(0).add(4,'years');
    const endDate = moment(0).add(8,'years');
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate,endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focus changes', () => {
    const calenderFocused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calenderFocused);
    expect(wrapper.state('calenderFocused')).toBe(calenderFocused);
});