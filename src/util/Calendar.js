import moment from  'moment';

function toWeekStart(year, month, date) {
  const now = moment({year, month, date});
  if (now.day() === 0) {
    return now;
  } else if (date === 1) {
    return now;
  }  else {
    return toWeekStart(year, month, date-1);
  }
}

function toWeekEnd(year, month, date) {
  const now = moment({year, month, date});
  if (now.day() === 6) {
    return now;
  } else if (date === now.endOf('month').date()) {
    return now;
  }  else {
    return toWeekEnd(year, month, date+1);
  }
}

function toFullWeek(year, month, date) {
  const now = moment({year, month, date});
  if (now.day() === 6) {
    return [now];
  } else if (date === now.endOf('month').date()) {
    return [now];
  }  else {
    return [now].concat(toFullWeek(year, month, date+1));
  }
}

function nowWeek(now = moment()) {
  const sunday  = toWeekStart(now.year(), now.month(), now.date());
  return toFullWeek(sunday.year(), sunday.month(), sunday.date());
}

const Calendar = {
  nowWeek
};

export default Calendar;
