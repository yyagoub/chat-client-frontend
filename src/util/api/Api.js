import axios from 'axios';
//import store from '../store/store';
//import { LandingActionsCreators } from '../../views/pages/landing/LandingActionsCreators';

export const BASE_PATH = 'http://localhost:5000/';
//export const BASE_PATH = "http://192.168.0.98:8080/";
//export const BASE_PATH = 'http://qahlog.ddns.net:81/';
//export const BASE_PATH = 'http://yjacob.ddns.net:81/api/';

export const Api = axios.create({
  baseURL: BASE_PATH,
  timeout: 2000,
});
/*
// accessing user reducer to get token and use it in header
Api.interceptors.request.use(function (config) {
  config.headers = {
    ...config.headers,
    authorization:
      'bearer ' + store.getState().LandingReducer.User.access_token,
  };
  config.auth = {
    username: 'first-client', // This is the client_id
    password: 'noonewilleverguess', // This is the client_secret
  };
  return config;
});

// if token is not authorized anymore, then logout!
Api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error.response);
    if (error.response.status === 401 || error.response.status === 403) {
      console.log('dispatch logout');
      store.dispatch(LandingActionsCreators.Logout());
      console.log('after dispatch logout');
    }
    return Promise.reject(error);
  }
);
*/
