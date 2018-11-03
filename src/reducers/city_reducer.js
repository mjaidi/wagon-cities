export default function cityReducer(state, action) {
  // Compute and return the new state (partial state - state the reducer is responsible for)
  if (state === undefined) {
    return [];
  }

  // handle actions
  // JS switch statement like Ruby case statement
  switch (action.type) {
    case 'SET_CITIES':
      return action.payload;
    default:
      return state;
  }
}


