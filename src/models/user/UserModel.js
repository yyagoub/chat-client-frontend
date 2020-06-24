import {
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
    case LoginSubmit:
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
    case LoginSuccessToken:
      state = {
        ...state,
        username: action.payload.User.username,
        jwt: action.payload.User.token,
        access_token: action.payload.User.access_token,
        loggedIn: true,
        submitted: false,
      };
      break;
    case LoginSuccessUser:
      state = {
        ...state,
        jwt: action.payload.User.token,
        firstName: action.payload.User.firstName,
        lastName: action.payload.User.lastName,
        loggedIn: true,
        submitted: false,
      };
      break;
    case LoginReject:
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
    case LogoutSubmit:
      // removed to the root reducer in (store->UsersListReducer) directory
      // state = initialState;
      break;
    case LogoutSuccess:
      // removed to the root reducer in (store->UsersListReducer) directory
      // state = initialState;
      break;
    case LogoutReject:
      // removed to the root reducer in (store->UsersListReducer) directory
      // state = initialState;
      break;
    // change language actions
    case LanguageSubmit:
      state = {
        ...state,
        submitted: true,
      };
      break;
    case LanguageSuccess:
      state = {
        ...state,
        language: action.payload.User.language,
      };
      break;
    case LanguageReject:
      state = {
        ...state,
        submitted: false,
      };
      break;
    // default value
    default:
      break;
  }
  return state;
};

export default UserModel;
