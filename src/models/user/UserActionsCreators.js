import axios from 'axios'; // used with authentication api calls without bearer token
import { Api, BASE_PATH } from '../../util/api/Api'; // used with any api call with bearer token
import { history } from '../../util/routes/history';
import {
  LoginSubmit,
  LoginSuccess,
  LoginReject,
  LogoutSubmit,
  LanguageSubmit,
  LanguageSuccess,
  LanguageReject,
  SignupSubmit,
  SignupSuccess,
  SignupRejected,
} from './UserActions';

//login  actions
export const Login = (user) => {
  return (dispatch) => {
    if (!user || !user.username || !user.password) dispatch(LoginReject());
    dispatch(LoginSubmit(user));
    axios
      .request({
        url: '/auth',
        method: 'post',
        baseURL: BASE_PATH,
        data: { ...user },
      })
      .then((response) => {
        dispatch(LoginSuccess(response.data));
        history.push('/dashboard');
      })
      .catch((error) => {
        dispatch(LoginReject());
      });
  };
};

// create new user
export const Signup = (user) => {
  return (dispatch) => {
    if (user.username === undefined || user.password === undefined)
      dispatch(SignupRejected());
    dispatch(SignupSubmit(user));
    axios
      .request({
        url: '/register',
        method: 'post',
        baseURL: BASE_PATH,
        data: { ...user },
      })
      .then((response) => {
        dispatch(SignupSuccess(response.data));
        history.push('/login');
      })
      .catch((error) => {
        dispatch(SignupRejected());
      });
  };
};

// logout actions
// to cancel jwt token from server side
export const Logout = () => {
  return (dispatch) => {
    dispatch(LogoutSubmit());
  };
};

// change language
export const changeLanguage = (user) => {
  return (dispatch) => {
    if (!user || !user.username || !user.language) return;
    dispatch(LanguageSubmit(user));
    Api.post('authenticate/language', user)
      .then((response) => {
        dispatch(LanguageSuccess(response.data));
      })
      .catch((error) => {
        dispatch(LanguageReject());
      });
  };
};
