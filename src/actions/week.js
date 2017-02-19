export function nextWeek(next) {
  return {type: 'NEXT_WEEK', nextWeek: next};
}

export function prevWeek(next) {
  return {type: 'PREV_WEEK', prevWeek: next};
}
