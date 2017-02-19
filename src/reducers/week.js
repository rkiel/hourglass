import _ from 'lodash';

import Calendar from '../util/Calendar';

function initialState(x) {
  const nowWeek = Calendar.nowWeek(x);
  const prevWeek = Calendar.prevWeek(nowWeek);
  const nextWeek = Calendar.nextWeek(nowWeek);

  return {
    nowWeek,
    prevWeek,
    nextWeek
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
