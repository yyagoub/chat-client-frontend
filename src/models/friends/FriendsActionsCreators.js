import { Api } from '../../util/api/Api';
import {
  FriendsListFindSubmit,
  FriendsListFindSuccess,
  FriendsListFindReject,
} from './FriendsActions';

export const getFriendsList = () => {
  return (dispatch) => {
    dispatch(FriendsListFindSubmit());
    Api.post('/', username)
      .then((response) => {
        console.log(response.data);
        dispatch(FriendsListFindSuccess());
      })
      .catch((error) => {
        console.log(error.response.data);
        dispatch(FriendsListFindReject());
      });
  };
};
