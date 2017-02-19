import moment from  'moment';

function toWeekStart(year, month, date) {
  const now = moment({year, month, date});
  if (now.day() === 0 || date === 1) {
    return now;
  }  else {
    return toWeekStart(year, month, date-1);
  }
}

function toWeekEnd(year, month, date) {
  const now = moment({year, month, date});
  if (now.day() === 6 || date === now.clone().endOf('month').date()) {
    return now;
  }  else {
    return toWeekEnd(year, month, date+1);
  }
}

function toFullWeek(year, month, date) {
  const now = moment({year, month, date});
  if (now.day() === 6 || date === now.clone().endOf('month').date()) {
    return [now];
  }  else {
    return [now].concat(toFullWeek(year, month, date+1));
  }
}

function nowWeek(now = moment()) {
  const sunday  = toWeekStart(now.year(), now.month(), now.date());
  return toFullWeek(sunday.year(), sunday.month(), sunday.date());
}

function nextWeek(nowWeek) {
  const endOfWeek = nowWeek[nowWeek.length-1];
  const nextSunday = endOfWeek.clone().add(1, 'd');
  return nextSunday;
}

function prevWeek(nowWeek) {
  const beginOfWeek = nowWeek[0];
  const lastSaturday = beginOfWeek.clone().subtract(1, 'd');
  return lastSaturday;
}

function isSunday(mDate) {
  return mDate.day() === 0;
}

function daysOfTheWeek() {
  return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
}

const Calendar = {
  nowWeek,
  prevWeek,
  nextWeek,
  isSunday,
  daysOfTheWeek
};

export default Calendar;
