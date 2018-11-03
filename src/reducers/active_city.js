export default function activeCityReducer(state, action) {
  // Compute and return the new state (partial state - state the reducer is responsible for)
  if (state === undefined) {
    return {name:"", address: "", slug:""};
  }

  // handle actions
  // JS switch statement like Ruby case statement
  switch (action.type) {
    case 'ACTIVE_CITY':
      return action.payload;
    default:
      return state;
  }
}

