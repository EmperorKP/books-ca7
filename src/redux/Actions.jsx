import { REGISTRATION_DETAILS, REMOVE_REGISTERED_USER } from "./Types";

export const registerUser = (details) => {
  return { type: REGISTRATION_DETAILS, payload: details };
};

export const removeRegisteredUser = () => {
  return { type: REMOVE_REGISTERED_USER };
};
