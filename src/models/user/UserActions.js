// login  actions
const LoginSubmit = (User) => {
  return {
    type: 'LOGIN_SUBMIT',
    payload: { User: User },
  };
};
const LoginSuccessToken = (User) => {
  return {
    type: 'LOGIN_SUCCESS_TOKEN',
    payload: { User: User },
  };
};
const LoginSuccessUser = (User) => {
  return {
    type: 'LOGIN_SUCCESS_USER',
    payload: { User: User },
  };
};
const LoginReject = () => ({
  type: 'LOGIN_REJECT',
  payload: {},
});

// logout actions
export const LogoutSubmit = () => ({
  type: 'LOGOUT_SUBMIT',
  payload: {},
});
export const LogoutSuccess = () => ({
  type: 'LOGOUT_SUCCESS',
  payload: {},
});
export const LogoutReject = () => ({
  type: 'LOGOUT_REJECT',
  payload: {},
});

// change language
export const LanguageSubmit = (User) => ({
  type: 'LANDING_CHANGE_LANGUAGE_SUBMIT',
  payload: { User: User },
});
export const LanguageSuccess = (User) => ({
  type: 'LANDING_CHANGE_LANGUAGE_SUCCESS',
  payload: { User: User },
});
export const LanguageReject = () => ({
  type: 'LANDING_CHANGE_LANGUAGE_REJECT',
  payload: {},
});

// create new user
const SignupSubmit = (user) => ({
  type: 'USERS_ADD_USER_SUBMIT',
  payload: { user },
});
const SignupSuccess = () => ({
  type: 'USERS_ADD_USER_SUCCESS',
  payload: {},
});
const SignupRejected = (user) => ({
  type: 'USERS_ADD_USER_REJECT',
  payload: { user },
});

// ACTIONS CREATORS   ->   USED IN dispatch() CALLS
export const UserActions = {
  LoginSubmit,
  LoginSuccessToken,
  LoginSuccessUser,
  LoginReject,
  LogoutSubmit,
  LogoutSuccess,
  LogoutReject,
  LanguageSubmit,
  LanguageSuccess,
  LanguageReject,
  SignupSubmit,
  SignupSuccess,
  SignupRejected,
};
