// login  actions
export const LoginSubmit = (User) => {
  return {
    type: 'LOGIN_SUBMIT',
    payload: { User: User },
  };
};
export const LoginSuccessToken = (User) => {
  return {
    type: 'LOGIN_SUCCESS_TOKEN',
    payload: { User: User },
  };
};
export const LoginSuccessUser = (User) => {
  return {
    type: 'LOGIN_SUCCESS_USER',
    payload: { User: User },
  };
};
export const LoginReject = () => ({
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
export const SignupSubmit = (user) => ({
  type: 'USERS_ADD_USER_SUBMIT',
  payload: { user },
});
export const SignupSuccess = () => ({
  type: 'USERS_ADD_USER_SUCCESS',
  payload: {},
});
export const SignupRejected = (user) => ({
  type: 'USERS_ADD_USER_REJECT',
  payload: { user },
});
