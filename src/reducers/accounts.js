
function initialState() {
  return [];
}

function accounts(state = initialState(), action) {
   switch (action.type) {

     case 'ACCOUNT_ADD':
       return state.concat([action.account]);

     default:
       return state;
   }
}

export default accounts;
