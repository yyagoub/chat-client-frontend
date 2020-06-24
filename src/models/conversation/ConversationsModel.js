import {
  FindFriendSubmit,
  FindFriendSuccess,
  FindFriendReject,
} from './ConversationsActions';

const initialState = {
  conversations: [],
  error: undefined,
};

const ConversationModel = (state = initialState, action) => {
  switch (action.type) {
    // Login actions
    case FindFriendSubmit:
      state = initialState;
      break;
    case FindFriendSuccess:
      if (!action.payload.conversations)
        state = { conversations: [], error: 'error!' };
      else
        state = {
          conversations: action.payload.conversations,
          error: undefined,
        };
      break;
    case FindFriendReject:
      if (!action.payload.error) state = { conversations: [], error: 'error!' };
      else state = { conversations: [], error: action.payload.error };
      break;
    // default value
    default:
      break;
  }
  return state;
};

export default ConversationModel;
