import { combineReducers } from 'redux';

import UserModel from '../../models/user/UserModel';

const rootReducer = combineReducers({
  UserModel,
});

/****************************************************
 * in case of multiple users using the same machine *
 * we need to clear the application state           *
 * by adding a new layer to wipe out store state    *
 * * wipe jwt from cookies                          *
 ****************************************************/

const Reducers = (state, action) => {
  // actions as variable makes some problem during project start up, so i had to replace it with static string
  if (action.type === 'LOGOUT_SUBMIT') {
    state = {};
  }

  return rootReducer(state, action);
};

export default Reducers;
