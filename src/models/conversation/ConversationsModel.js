import {
  CONVERSATION_FIND_FRIEND_SUBMIT,
  CONVERSATION_FIND_FRIEND_REJECT,
  CONVERSATION_FIND_FRIEND_SUCCESS,
} from './ConversationsActions';

const initialState = {
  conversations: [],
  error: undefined,
};

const ConversationModel = (state = initialState, action) => {
  switch (action.type) {
    // Login actions
    case CONVERSATION_FIND_FRIEND_SUBMIT:
      state = initialState;
      break;
    case CONVERSATION_FIND_FRIEND_REJECT:
      if (!action.payload.conversations)
        state = { conversations: [], error: 'error!' };
      else
        state = {
          conversations: action.payload.conversations,
          error: undefined,
        };
      break;
    case CONVERSATION_FIND_FRIEND_SUCCESS:
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
