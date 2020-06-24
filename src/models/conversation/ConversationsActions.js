// find a friend and start a conversations actions
export const FindFriendSubmit = (username) => {
  return {
    type: 'CONVERSATION_FIND_FRIEND_SUBMIT',
    payload: { username: username },
  };
};
export const FindFriendSuccess = (conversations) => {
  return {
    type: 'CONVERSATION_FIND_FRIEND_SUCCESS',
    payload: { conversations: conversations },
  };
};
export const FindFriendReject = (error) => {
  return {
    type: 'CONVERSATION_FIND_FRIEND_REJECT',
    payload: { error: error },
  };
};
