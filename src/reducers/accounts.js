
function initialState() {
  return [
    {code: "P1", label: "Project #1"},
    {code: "P2", label: "Project #2"},
    {code: "h", label: "Holiday"},
    {code: "P", label: "PTO"},
    {code: "T", label: "Training"}
  ];
}

function accounts(state = initialState(), action) {
   switch (action.type) {

     case 'ADD_ACCOUNT':
       return state;

     case 'REMOVE_ACCOUNT':
       return state;

     case 'UPDATE_ACCOUNT':
       return state;

     default:
       return state;
   }
}

export default accounts;
