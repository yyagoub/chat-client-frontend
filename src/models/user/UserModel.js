import {
  LANDING_CHANGE_LANGUAGE_REJECT,
  LANDING_CHANGE_LANGUAGE_SUBMIT,
  LANDING_CHANGE_LANGUAGE_SUCCESS,
  LOGIN_REJECT,
  LOGIN_SUBMIT,
  LOGIN_SUCCESS,
  LOGOUT_REJECT,
  LOGOUT_SUBMIT,
  LOGOUT_SUCCESS,
  USERS_ADD_USER_SUBMIT,
  USERS_ADD_USER_SUCCESS,
  USERS_ADD_USER_REJECT,
} from './UserActions';
const initialState = {
  firstName: ' ',
  lastName: ' ',
  username: ' ',
  password: ' ',
  usernameErr: false,
  passwordErr: false,
  jwt: 'jwt',
  language: 'en',
  loggedIn: false,
  submitted: false,
};

const UserModel = (state = initialState, action) => {
  switch (action.type) {
    // Login actions
    case LOGIN_SUBMIT:
      state = {
        ...state,
        username: action.payload.User.username,
        password: action.payload.User.password,
        usernameErr: false,
        passwordErr: false,
        jwt: '',
        submitted: true,
      };
      break;
    case LOGIN_SUCCESS:
      state = {
        ...state,
        username: action.payload.User.username,
        jwt: action.payload.User.token,
        access_token: action.payload.User.access_token,
        loggedIn: true,
        submitted: false,
      };
      break;
    case LOGIN_REJECT:
      state = {
        username: '',
        password: '',
        usernameErr: true,
        passwordErr: true,
        jwt: '',
        loggedIn: false,
        submitted: false,
      };
      break;
    // Logout actions
    case LOGOUT_SUBMIT:
      // removed to the root reducer in (store->UsersListReducer) directory
      // state = initialState;
      break;
    case LOGOUT_SUCCESS:
      // removed to the root reducer in (store->UsersListReducer) directory
      // state = initialState;
      break;
    case LOGOUT_REJECT:
      // removed to the root reducer in (store->UsersListReducer) directory
      // state = initialState;
      break;
    // change language actions
    case LANDING_CHANGE_LANGUAGE_SUBMIT:
      state = {
        ...state,
        submitted: true,
      };
      break;
    case LANDING_CHANGE_LANGUAGE_SUCCESS:
      state = {
        ...state,
        language: action.payload.User.language,
      };
      break;
    case LANDING_CHANGE_LANGUAGE_REJECT:
      state = {
        ...state,
        submitted: false,
      };
      break;
    // create new user
    case USERS_ADD_USER_SUBMIT:
      state = { ...state };
      break;
    case USERS_ADD_USER_SUCCESS:
      state = { ...state };
      break;
    case USERS_ADD_USER_REJECT:
      state = { ...state, usernameErr: true, passwordErr: true };
      break;
    // default value
    default:
      break;
  }
  return state;
};

export default UserModel;
