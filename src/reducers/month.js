import _ from 'lodash';

function initialState() {
  let dates = _.map(_.range(31), date => date + 1);

  dates = _.reduce(dates, (accumulator, date) => {
    accumulator[date] = {};
    return accumulator;
  }, {});

  return {
    dates
  };
}

function month(state = initialState(), action) {
   switch (action.type) {

     case 'TBD':
       return state;

     default:
       return state;
   }
}

export default month;
