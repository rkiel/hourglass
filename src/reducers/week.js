import _ from 'lodash';

import Calendar from '../util/Calendar';

function initialState() {
  const nowWeek = Calendar.nowWeek();
  return _.map(nowWeek, mDate => ({mDate}));
}


function week(state = initialState(), action) {
   switch (action.type) {
     case 'PLACEHOLDER':
       return state;

     default:
       return state;
   }
}

export default week;
