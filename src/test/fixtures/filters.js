import momemt from 'moment';

const filters = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const altFilters = {
    text: 'bills',
    sortBy: 'amount',
    startDate: momemt(0),
    endDate: momemt(0).add(3,'days')
};

export {filters,altFilters};