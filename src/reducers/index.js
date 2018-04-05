let init = {
  firstName: " "
};
export default function(state = init, action) {
  switch (action.type) {
    case "ADD_ENTRY": {
      return {
        ...state,
        firstName: action.firstName
      };
    }
    default: {
      return state;
    }
  }
}
