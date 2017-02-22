import _ from 'lodash';

import Calendar from '../util/Calendar';

function mapDotwToEmpty(dotw, index) {
  return {
    day: index,
    label: dotw,
    isEmpty: true
  };
}

const replaceEachDayIn = _.curry(function(week, day) {
  week[day.day()] = day;
});

function initialState(startDate) {
  const nowWeek = Calendar.nowWeek(startDate);
  const prevWeek = Calendar.prevWeek(nowWeek);
  const nextWeek = Calendar.nextWeek(nowWeek);

  const month = nowWeek[0].format('MMMM YYYY');

  const week = _.map(Calendar.daysOfTheWeek(), mapDotwToEmpty);
  _.each(nowWeek, replaceEachDayIn(week));

  return {
    nowWeek: week,
    prevWeek,
    nextWeek,
    month
  };
}


function week(state = initialState(), action) {
   switch (action.type) {

     case 'PREV_WEEK':
       return initialState(action.prevWeek);

     case 'NEXT_WEEK':
       return initialState(action.nextWeek);

     default:
       return state;
   }
}

export default week;
