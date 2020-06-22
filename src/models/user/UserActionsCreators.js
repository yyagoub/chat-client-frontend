import axios from 'axios'; // used with authentication api calls without bearer token
import { Api, BASE_PATH } from '../../util/api/Api'; // used with any api call with bearer token
import { history } from '../../util/routes/history';
import { UserActions } from './UserActions';

//login  actions
export const Login = (user) => {
  return (dispatch) => {
    if (!user || !user.username || !user.password)
      dispatch(UserActions.LoginReject());
    dispatch(UserActions.LoginSubmit(user));
    axios
      .request({
        url: '/auth',
        method: 'post',
        baseURL: BASE_PATH,
        data: { ...user },
      })
      .then((response) => {
        console.log(response.data);
        dispatch(UserActions.LoginSuccessToken(response.data));
      })
      .catch((error) => {
        console.log(error.response.data);
        dispatch(UserActions.LoginReject());
      });
    history.push('/dashboard');
  };
};

// create new user
const Signup = (user) => {
  return (dispatch) => {
    if (user.username === undefined || user.password === undefined)
      dispatch(UserActions.SignupRejected());
    dispatch(UserActions.SignupSubmit(user));
    axios
      .request({
        url: '/register',
        method: 'post',
        baseURL: BASE_PATH,
        data: { ...user },
      })
      .then((response) => {
        dispatch(UserActions.SignupSuccess(response.data));
      })
      .catch((error) => {
        console.log(error.response.data);
        dispatch(UserActions.SignupRejected());
      });
  };
};

// logout actions
// to cancel jwt token from server side
export const Logout = () => {
  return (dispatch) => {
    dispatch(UserActions.LogoutSubmit());
  };
};

// change language
export const changeLanguage = (user) => {
  return (dispatch) => {
    if (!user || !user.username || !user.language) return;
    dispatch(UserActions.LanguageSubmit(user));
    Api.post('authenticate/language', user)
      .then((response) => {
        dispatch(UserActions.LanguageSuccess(response.data));
      })
      .catch((error) => {
        dispatch(UserActions.LanguageReject());
      });
  };
};

// ACTIONS CREATORS   ->   USED IN dispatch() CALLS
export const UserActionsCreators = {
  Login,
  Signup,
  Logout,
  changeLanguage,
};
