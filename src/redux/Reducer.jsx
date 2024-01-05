import { REGISTRATION_DETAILS, REMOVE_REGISTERED_USER } from "./Types";

const initialState = { details: {} };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTRATION_DETAILS:
      return { ...state, details: action.payload };

    case REMOVE_REGISTERED_USER:
      return initialState;

    default:
      return state;
  }
};

export default reducer;
