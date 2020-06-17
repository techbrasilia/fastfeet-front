import produce from 'immer';

const INITIAL_STATE = {
  recipient: null,
  loading: false,
};

export default function recipient(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@recipient/CREATE_REQUEST': {
        draft.recipient = action.payload;
        draft.loading = true;

        break;
      }
      case '@recipient/CREATE_SUCCESS': {
        draft.recipient = action.payload.recipient;
        draft.loading = false;
        break;
      }
      case '@recipient/CREATE_FAILURE': {
        draft.loading = false;
        break;
      }

      case '@recipient/EDIT_REQUEST': {
        draft.recipient = action.payload;
        draft.loading = true;

        break;
      }
      case '@recipient/EDIT_SUCCESS': {
        draft.recipient = action.payload.recipient;
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
