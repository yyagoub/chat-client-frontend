// login  actions
export const LOGIN_SUBMIT = 'LOGIN_SUBMIT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_REJECT = 'LOGIN_REJECT';
// login  actions
export const LoginSubmit = (User) => {
  return {
    type: LOGIN_SUBMIT,
    payload: { User: User },
  };
};
export const LoginSuccess = (User) => {
  return {
    type: LOGIN_SUCCESS,
    payload: { User: User },
  };
};
export const LoginReject = () => ({
  type: LOGIN_REJECT,
  payload: {},
});

// logout actions
export const LOGOUT_SUBMIT = 'LOGOUT_SUBMIT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_REJECT = 'LOGOUT_REJECT';
// logout actions
export const LogoutSubmit = () => ({
  type: LOGOUT_SUBMIT,
  payload: {},
});
export const LogoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
  payload: {},
});
export const LogoutReject = () => ({
  type: LOGOUT_REJECT,
  payload: {},
});

// change language
export const LANDING_CHANGE_LANGUAGE_SUBMIT = 'LANDING_CHANGE_LANGUAGE_SUBMIT';
export const LANDING_CHANGE_LANGUAGE_SUCCESS =
  'LANDING_CHANGE_LANGUAGE_SUCCESS';
export const LANDING_CHANGE_LANGUAGE_REJECT = 'LANDING_CHANGE_LANGUAGE_REJECT';
// change language
export const LanguageSubmit = (User) => ({
  type: LANDING_CHANGE_LANGUAGE_SUBMIT,
  payload: { User: User },
});
export const LanguageSuccess = (User) => ({
  type: LANDING_CHANGE_LANGUAGE_SUCCESS,
  payload: { User: User },
});
export const LanguageReject = () => ({
  type: LANDING_CHANGE_LANGUAGE_REJECT,
  payload: {},
});

// create new user
export const USERS_ADD_USER_SUBMIT = 'USERS_ADD_USER_SUBMIT';
export const USERS_ADD_USER_SUCCESS = 'USERS_ADD_USER_SUCCESS';
export const USERS_ADD_USER_REJECT = 'USERS_ADD_USER_REJECT';
// create new user
export const SignupSubmit = (user) => ({
  type: USERS_ADD_USER_SUBMIT,
  payload: { user },
});
export const SignupSuccess = () => ({
  type: USERS_ADD_USER_SUCCESS,
  payload: {},
});
export const SignupRejected = (user) => ({
  type: USERS_ADD_USER_REJECT,
  payload: { user },
});
