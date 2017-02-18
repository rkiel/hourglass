
function toPennies(dollars) {
  return parseInt((dollars * 100).toFixed());
}

function toDollars(pennies) {
  return (pennies / 100.0).toFixed(2);
}

const hours = {
  toPennies,
  toDollars,
}

export default hours;
