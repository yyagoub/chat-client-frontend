import { Api } from '../../util/api/Api'; // used with any api call with bearer token
//import { history } from '../../util/routes/history';
import {
  FindFriendSubmit,
  //FindFriendSuccess,
  FindFriendReject,
} from './ConversationsActions';

//login  actions
export const findFriend = (username) => {
  return (dispatch) => {
    if (!username.trim()) dispatch(FindFriendReject());
    dispatch(FindFriendSubmit());
    Api.post('/', username)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
};
