// find lists of friends
export const FRIENDS_LIST_FIND_SUBMIT = 'FRIENDS_LIST_FIND_SUBMIT';
export const FRIENDS_LIST_FIND_SUCCESS = 'FRIENDS_LIST_FIND_SUCCESS';
export const FRIENDS_LIST_FIND_REJECT = 'FRIENDS_LIST_FIND_REJECT';
export const FriendsListFindSubmit = (username) => {
  return {
    type: FRIENDS_LIST_FIND_SUBMIT,
    payload: { username: username },
  };
};
export const FriendsListFindSuccess = (conversations) => {
  return {
    type: FRIENDS_LIST_FIND_SUCCESS,
    payload: { conversations: conversations },
  };
};
export const FriendsListFindReject = (error) => {
  return {
    type: FRIENDS_LIST_FIND_REJECT,
    payload: { error: error },
  };
};
