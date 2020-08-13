import {
  FRIENDS_LIST_FIND_SUBMIT,
  FRIENDS_LIST_FIND_SUCCESS,
  FRIENDS_LIST_FIND_REJECT,
} from './FriendsActions';

const initialState = {
  friends: [{}],
  error: {},
};

const Friends = (state = initialState, action) => {
  switch (action.type) {
    case FRIENDS_LIST_FIND_SUBMIT:
      state = {
        ...state,
      };
      break;
    case FRIENDS_LIST_FIND_SUCCESS:
      state = {
        ...state,
        friends: [...action.payload.friends],
        error: {},
      };
      break;
    case FRIENDS_LIST_FIND_REJECT:
      state = {
        ...state,
        friends: [{}],
        error: { ...action.payload.error },
      };
      break;
    default:
      break;
  }
  return state;
};

export default Friends;
